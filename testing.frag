#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

// Sunrise colors (warm orange/yellow)
vec3 colorA = vec3(1.0, 0.6, 0.2);  // Orange sunrise

// Sunset colors (deep red/purple)
vec3 colorB = vec3(0.8, 0.2, 0.4);  // Red/purple sunset

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);
    float pct = (sin(u_time * 0.5) + 1.0) * 0.5;
    color = mix(colorA, colorB, pct);

    gl_FragColor = vec4(color,1.0);
}
