var lzma = require('lzma');
var Transform = require('stream').Transform;
var PluginError = require('gulp-util').PluginError;

var PLUGIN_NAME = 'gulp-lzmajs';
var HEAD = 'eval(function(r){"use strict";function n(r){var n=[];return n[r-1]=void 0,n}function u(r,n){return a(r[0]+n[0],r[1]+n[1])}function t(r,n){var u,t;return r[0]==n[0]&&r[1]==n[1]?0:(u=0>r[1],t=0>n[1],u&&!t?-1:!u&&t?1:f(r,n)[1]<0?-1:1)}function a(r,n){var u,t;for(n%=0x10000000000000000,r%=0x10000000000000000,u=n%ur,t=Math.floor(r/ur)*ur,n=n-u+t,r=r-t+u;0>r;)r+=ur,n-=ur;for(;r>4294967295;)r-=ur,n+=ur;for(n%=0x10000000000000000;n>0x7fffffff00000000;)n-=0x10000000000000000;for(;-0x8000000000000000>n;)n+=0x10000000000000000;return[r,n]}function o(r){return r>=0?[r,0]:[r+ur,-ur]}function e(r){return r[0]>=2147483648?~~Math.max(Math.min(r[0]-ur,2147483647),-2147483648):~~Math.max(Math.min(r[0],2147483647),-2147483648)}function f(r,n){return a(r[0]-n[0],r[1]-n[1])}function i(r,n){return r.ab=n,r.cb=0,r.O=n.length,r}function c(r){return r.cb>=r.O?-1:255&r.ab[r.cb++]}function h(r){return r.ab=n(32),r.O=0,r}function v(r){var n=r.ab;return n.length=r.O,n}function p(r,n,u,t){A(n,u,r.ab,r.O,t),r.O+=t}function A(r,n,u,t,a){for(var o=0;a>o;++o)u[t+o]=r[n+o]}function d(r,n,u){var t,a,e,f,i="",h=[];for(a=0;5>a;++a){if(e=c(n),-1==e)throw Error("truncated input");h[a]=e<<24>>24}if(t=U({}),!g(t,h))throw Error("corrupted input");for(a=0;64>a;a+=8){if(e=c(n),-1==e)throw Error("truncated input");e=e.toString(16),1==e.length&&(e="0"+e),i=e+""+i}/^0+$|^f+$/i.test(i)?r.M=tr:(f=parseInt(i,16),r.M=f>4294967295?tr:o(f)),r.S=P(t,n,u,r.M)}function l(r,n){return r.Y=h({}),d(r,i({},n),r.Y),r}function X(r,n,u){var t=r.y-n-1;for(0>t&&(t+=r.c);0!=u;--u)t>=r.c&&(t=0),r.x[r.y++]=r.x[t++],r.y>=r.c&&C(r)}function b(r,u){(null==r.x||r.c!=u)&&(r.x=n(u)),r.c=u,r.y=0,r.w=0}function C(r){var n=r.y-r.w;n&&(p(r.T,r.x,r.w,n),r.y>=r.c&&(r.y=0),r.w=r.y)}function N(r,n){var u=r.y-n-1;return 0>u&&(u+=r.c),r.x[u]}function s(r,n){r.x[r.y++]=n,r.y>=r.c&&C(r)}function w(r){C(r),r.T=null}function Q(r){return r-=2,4>r?r:3}function R(r){return 4>r?0:10>r?r-3:r-6}function S(r,n){return r.h=n,r.bb=null,r.V=1,r}function j(r){if(!r.V)throw Error("bad state");if(r.bb)throw Error("No encoding");return E(r),r.V}function E(r){var n=H(r.h);if(-1==n)throw Error("corrupted input");r.$=tr,r.Z=r.h.d,(n||t(r.h.U,ar)>=0&&t(r.h.d,r.h.U)>=0)&&(C(r.h.b),w(r.h.b),r.h.a.K=null,r.V=0)}function P(r,n,u,t){return r.a.K=n,w(r.b),r.b.T=u,x(r),r.f=0,r.l=0,r.Q=0,r.R=0,r._=0,r.U=t,r.d=ar,r.G=0,S({},r)}function H(r){var n,a,f,i,c,h;if(h=e(r.d)&r.P,K(r.a,r.t,(r.f<<4)+h)){if(K(r.a,r.E,r.f))f=0,K(r.a,r.r,r.f)?(K(r.a,r.u,r.f)?(K(r.a,r.s,r.f)?(a=r._,r._=r.R):a=r.R,r.R=r.Q):a=r.Q,r.Q=r.l,r.l=a):K(r.a,r.o,(r.f<<4)+h)||(r.f=7>r.f?9:11,f=1),f||(f=I(r.n,r.a,h)+2,r.f=7>r.f?8:11);else if(r._=r.R,r.R=r.Q,r.Q=r.l,f=2+I(r.D,r.a,h),r.f=7>r.f?7:10,c=G(r.k[Q(f)],r.a),c>=4){if(i=(c>>1)-1,r.l=(2|1&c)<<i,14>c)r.l+=B(r.J,r.l-c-1,r.a,i);else if(r.l+=J(r.a,i-4)<<4,r.l+=F(r.q,r.a),0>r.l)return-1==r.l?1:-1}else r.l=c;if(t(o(r.l),r.d)>=0||r.l>=r.m)return-1;X(r.b,r.l,f),r.d=u(r.d,o(f)),r.G=N(r.b,0)}else n=z(r.j,e(r.d),r.G),r.G=7>r.f?k(n,r.a):Z(n,r.a,N(r.b,r.l)),s(r.b,r.G),r.f=R(r.f),r.d=u(r.d,or);return 0}function U(r){r.b={},r.a={},r.t=n(192),r.E=n(12),r.r=n(12),r.u=n(12),r.s=n(12),r.o=n(192),r.k=n(4),r.J=n(114),r.q=m({},4),r.D=D({}),r.n=D({}),r.j={};for(var u=0;4>u;++u)r.k[u]=m({},6);return r}function x(r){r.b.w=0,r.b.y=0,L(r.t),L(r.o),L(r.E),L(r.r),L(r.u),L(r.s),L(r.J),V(r.j);for(var n=0;4>n;++n)L(r.k[n].z);O(r.D),O(r.n),L(r.q.z),Y(r.a)}function g(r,n){var u,t,a,o,e,f,i;if(5>n.length)return 0;for(i=255&n[0],a=i%9,f=~~(i/9),o=f%5,e=~~(f/5),u=0,t=0;4>t;++t)u+=(255&n[1+t])<<8*t;return u>99999999||!M(r,a,o,e)?0:q(r,u)}function q(r,n){return 0>n?0:(r.A!=n&&(r.A=n,r.m=Math.max(r.A,1),b(r.b,Math.max(r.m,4096))),1)}function M(r,n,u,t){if(n>8||u>4||t>4)return 0;W(r.j,u,n);var a=1<<t;return y(r.D,a),y(r.n,a),r.P=a-1,1}function y(r,n){for(;n>r.e;++r.e)r.I[r.e]=m({},3),r.H[r.e]=m({},3)}function I(r,n,u){if(!K(n,r.N,0))return G(r.I[u],n);var t=8;return t+=K(n,r.N,1)?8+G(r.L,n):G(r.H[u],n)}function D(r){return r.N=n(2),r.I=n(16),r.H=n(16),r.L=m({},8),r.e=0,r}function O(r){L(r.N);for(var n=0;r.e>n;++n)L(r.I[n].z),L(r.H[n].z);L(r.L.z)}function W(r,u,t){var a,o;if(null==r.F||r.g!=t||r.B!=u)for(r.B=u,r.X=(1<<u)-1,r.g=t,o=1<<r.g+r.B,r.F=n(o),a=0;o>a;++a)r.F[a]=T({})}function z(r,n,u){return r.F[((n&r.X)<<r.g)+((255&u)>>>8-r.g)]}function V(r){var n,u;for(u=1<<r.g+r.B,n=0;u>n;++n)L(r.F[n].v)}function k(r,n){var u=1;do u=u<<1|K(n,r.v,u);while(256>u);return u<<24>>24}function Z(r,n,u){var t,a,o=1;do if(a=u>>7&1,u<<=1,t=K(n,r.v,(1+a<<8)+o),o=o<<1|t,a!=t){for(;256>o;)o=o<<1|K(n,r.v,o);break}while(256>o);return o<<24>>24}function T(r){return r.v=n(768),r}function m(r,u){return r.C=u,r.z=n(1<<u),r}function G(r,n){var u,t=1;for(u=r.C;0!=u;--u)t=(t<<1)+K(n,r.z,t);return t-(1<<r.C)}function F(r,n){var u,t,a=1,o=0;for(t=0;r.C>t;++t)u=K(n,r.z,a),a<<=1,a+=u,o|=u<<t;return o}function B(r,n,u,t){var a,o,e=1,f=0;for(o=0;t>o;++o)a=K(u,r,n+e),e<<=1,e+=a,f|=a<<o;return f}function K(r,n,u){var t,a=n[u];return t=(r.i>>>11)*a,(-2147483648^t)>(-2147483648^r.p)?(r.i=t,n[u]=a+(2048-a>>>5)<<16>>16,-16777216&r.i||(r.p=r.p<<8|c(r.K),r.i<<=8),0):(r.i-=t,r.p-=t,n[u]=a-(a>>>5)<<16>>16,-16777216&r.i||(r.p=r.p<<8|c(r.K),r.i<<=8),1)}function J(r,n){var u,t,a=0;for(u=n;0!=u;--u)r.i>>>=1,t=r.p-r.i>>>31,r.p-=r.i&t-1,a=a<<1|1-t,-16777216&r.i||(r.p=r.p<<8|c(r.K),r.i<<=8);return a}function Y(r){r.p=0,r.i=-1;for(var n=0;5>n;++n)r.p=r.p<<8|c(r.K)}function L(r){for(var n=r.length-1;n>=0;--n)r[n]=1024}function _(r){var n,u,t,a,o="",e=r.length;for(n=0;e>n;++n)if(u=255&r[n],128&u)if(192==(224&u)){if(n+1>=r.length)return r;if(t=255&r[++n],128!=(192&t))return r;o+=String.fromCharCode((31&u)<<6&65535|63&t)}else{if(224!=(240&u))return r;if(n+2>=r.length)return r;if(t=255&r[++n],128!=(192&t))return r;if(a=255&r[++n],128!=(192&a))return r;o+=String.fromCharCode(65535&((15&u)<<12|(63&t)<<6|63&a))}else{if(!u)return r;o+=String.fromCharCode(65535&u)}return o}function $(r){return r>64&&91>r?r-65:r>96&&123>r?r-71:r>47&&58>r?r+4:43===r?62:47===r?63:0}function rr(n){for(var u,t,a=n.replace(/[^A-Za-z0-9\\+\\/]/g,""),o=a.length,e=3*o+1>>>2,f=("Uint8Array"in r?new r.Uint8Array(e):new Array(e)),i=0,c=0,h=0;o>h;h++)if(t=3&h,i|=$(a.charCodeAt(h))<<18-6*t,3===t||o-h===1){for(u=0;3>u&&e>c;u++,c++)f[c]=i>>>(16>>>u&24)&255;i=0}return f}function nr(r){r=rr(r);var n={};for(n.d=l({},r);j(n.d.S););return _(v(n.d.Y))}var ur=4294967296,tr=[4294967295,-ur],ar=[0,0],or=[1,0];return nr}(this)("';
var END = '"));';

module.exports = function() {
    'use strict';
    var stream = new Transform({ objectMode: true });
    stream._transform = function(file, enc, cb) {
        if (file.isNull()) {
            cb(null, file);
        }
        if (file.isBuffer()) {
            lzma.compress(file.contents, 9, function(result) {
                file.contents = new Buffer(HEAD + new Buffer(result).toString('base64') + END);
                cb(null, file);
            });
            return;
        }
        if (file.isStream()) {
            return cb(new PluginError(PLUGIN_NAME, 'Streaming not supported'));
        }
        cb(null, file);
    };
    return stream;
};
