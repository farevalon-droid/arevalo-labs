/**
 * AREVALO LABS® — WebGL Matrix Shader
 * Electric Cyan & Cyber Cobalt Blue Palette
 * Isolated module — zero globals, runs only if WebGL is supported
 */

;(function () {
  'use strict';

  var CANVAS_ID = 'shader-canvas-hero';

  function initShader() {
    var canvas = document.getElementById(CANVAS_ID);
    if (!canvas) return;

    function syncSize() {
      var w = canvas.clientWidth  || 1280;
      var h = canvas.clientHeight || 720;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width  = w;
        canvas.height = h;
      }
    }

    if (typeof ResizeObserver !== 'undefined') {
      new ResizeObserver(syncSize).observe(canvas);
    }
    syncSize();

    var gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return; // Graceful degradation

    var VERT = [
      'attribute vec2 a_position;',
      'varying vec2 v_texCoord;',
      'void main() {',
      '  v_texCoord = a_position * 0.5 + 0.5;',
      '  gl_Position = vec4(a_position, 0.0, 1.0);',
      '}'
    ].join('\n');

    // Electric Cyan & Cobalt Matrix Shader
    var FRAG = [
      'precision highp float;',
      'uniform float u_time;',
      'uniform vec2 u_resolution;',
      'uniform vec2 u_mouse;',

      'float hash(vec2 p) {',
      '  p = fract(p * vec2(123.34, 456.21));',
      '  p += dot(p, p + 45.32);',
      '  return fract(p.x * p.y);',
      '}',

      'void main() {',
      '  vec2 st = gl_FragCoord.xy / u_resolution.xy;',
      '  float cols = 64.0;',
      '  float colIdx  = floor(st.x * cols);',
      '  float colFrac = fract(st.x * cols);',
      '  float speed   = 1.2 + hash(vec2(colIdx, 1.0)) * 2.8;',
      '  float colSeed = hash(vec2(colIdx, 2.0));',
      '  float rowHeight = 14.0;',
      '  float rowIdx  = floor((gl_FragCoord.y + u_time * speed * 40.0) / rowHeight);',
      '  float charSeed = hash(vec2(colIdx, rowIdx));',
      '  float charMask = step(0.18, colFrac) * step(colFrac, 0.82);',
      '  float bit  = step(0.45, charSeed);',
      '  float headPos   = fract((u_time * speed * 0.15) + colSeed);',
      '  float distToHead = fract(1.0 - st.y - headPos);',
      '  float trail = exp(-distToHead * 7.5);',
      '  float scanline = sin(gl_FragCoord.y * 1.5 + u_time * 3.0) * 0.05;',

      /* Tech Electric Blue / Cyan Palette */
      '  vec3 bg       = vec3(0.02, 0.03, 0.05);',
      '  vec3 cyanGlow = vec3(0.0, 0.9, 1.0);',       // #00E5FF electric cyan
      '  vec3 deepBlue = vec3(0.05, 0.25, 0.85);',    // cobalt blue
      '  vec3 white    = vec3(0.95, 0.98, 1.0);',

      '  vec3 codeColor = mix(deepBlue, cyanGlow, trail);',
      '  if (distToHead < 0.04 && distToHead >= 0.0) {',
      '    codeColor = mix(codeColor, white, 0.85);',
      '  }',

      '  float codeIntensity = charMask * bit * trail * 0.45;',

      '  vec2 pGrid = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);',
      '  float grid = step(0.97, fract(pGrid.x * 12.0)) + step(0.97, fract(pGrid.y * 12.0));',

      '  vec3 finalColor = bg;',
      '  finalColor += codeColor * codeIntensity;',
      '  finalColor += cyanGlow * (grid * 0.025);',
      '  finalColor += vec3(scanline * 0.2);',

      '  float vig = 1.0 - length(st - 0.5) * 0.8;',
      '  finalColor *= clamp(vig, 0.2, 1.0);',

      '  gl_FragColor = vec4(finalColor, 1.0);',
      '}'
    ].join('\n');

    function createShader(type, src) {
      var s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        gl.deleteShader(s);
        return null;
      }
      return s;
    }

    var vs = createShader(gl.VERTEX_SHADER, VERT);
    var fs = createShader(gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;

    var prog = gl.createProgram();
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;

    gl.useProgram(prog);

    var buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);

    var pos   = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    var uTime  = gl.getUniformLocation(prog, 'u_time');
    var uRes   = gl.getUniformLocation(prog, 'u_resolution');
    var uMouse = gl.getUniformLocation(prog, 'u_mouse');

    var mouse = { x: canvas.width / 2, y: canvas.height / 2 };

    window.addEventListener('mousemove', function (e) {
      var rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        mouse.x = ((e.clientX - rect.left) / rect.width) * canvas.width;
        mouse.y = (1.0 - (e.clientY - rect.top) / rect.height) * canvas.height;
      }
    }, { passive: true });

    var rafId;
    function render(t) {
      if (typeof ResizeObserver === 'undefined') syncSize();
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime)  gl.uniform1f(uTime,  t * 0.001);
      if (uRes)   gl.uniform2f(uRes,   canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouse.x,      mouse.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      rafId = requestAnimationFrame(render);
    }

    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        cancelAnimationFrame(rafId);
      } else {
        rafId = requestAnimationFrame(render);
      }
    });

    rafId = requestAnimationFrame(render);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initShader);
  } else {
    initShader();
  }

}());
