/**
 * Cesium - https://github.com/CesiumGS/cesium
 *
 * Copyright 2011-2020 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/master/LICENSE.md for full licensing details.
 */
define(["exports","./when-8d13db60","./Check-70bec281","./Math-61ede240","./Cartographic-f27b0939","./BoundingSphere-c409f092"],function(e,x,P,I,z,T){var U={};function d(e,r,t){var a=e+r;return I.CesiumMath.sign(e)!==I.CesiumMath.sign(r)&&Math.abs(a/Math.max(Math.abs(e),Math.abs(r)))<t?0:a}U.computeDiscriminant=function(e,r,t){if("number"!=typeof e)throw new P.DeveloperError("a is a required number.");if("number"!=typeof r)throw new P.DeveloperError("b is a required number.");if("number"!=typeof t)throw new P.DeveloperError("c is a required number.");return r*r-4*e*t},U.computeRealRoots=function(e,r,t){if("number"!=typeof e)throw new P.DeveloperError("a is a required number.");if("number"!=typeof r)throw new P.DeveloperError("b is a required number.");if("number"!=typeof t)throw new P.DeveloperError("c is a required number.");var a;if(0===e)return 0===r?[]:[-t/r];if(0===r){if(0===t)return[0,0];var i=Math.abs(t),n=Math.abs(e);if(i<n&&i/n<I.CesiumMath.EPSILON14)return[0,0];if(n<i&&n/i<I.CesiumMath.EPSILON14)return[];if((a=-t/e)<0)return[];var o=Math.sqrt(a);return[-o,o]}if(0===t)return(a=-r/e)<0?[a,0]:[0,a];var s=d(r*r,-(4*e*t),I.CesiumMath.EPSILON14);if(s<0)return[];var u=-.5*d(r,I.CesiumMath.sign(r)*Math.sqrt(s),I.CesiumMath.EPSILON14);return 0<r?[u/e,t/u]:[t/u,u/e]};var O={};function s(e,r,t,a){var i,n,o=e,s=r/3,u=t/3,d=a,f=o*u,l=s*d,h=s*s,m=u*u,p=o*u-h,c=o*d-s*u,C=s*d-m,w=4*p*C-c*c;if(w<0){var v,M,b,g=-((b=f*m<=h*l?-2*s*(M=p)+(v=o)*c:-(v=d)*c+2*u*(M=C))<0?-1:1)*Math.abs(v)*Math.sqrt(-w),q=(n=-b+g)/2,E=q<0?-Math.pow(-q,1/3):Math.pow(q,1/3),y=n===g?-E:-M/E;return i=M<=0?E+y:-b/(E*E+y*y+M),f*m<=h*l?[(i-s)/o]:[-d/(i+u)]}var D=p,R=-2*s*p+o*c,S=C,O=-d*c+2*u*C,x=Math.sqrt(w),P=Math.sqrt(3)/2,N=Math.abs(Math.atan2(o*x,-R)/3);i=2*Math.sqrt(-D);var L=Math.cos(N);n=i*L;var I=i*(-L/2-P*Math.sin(N)),z=2*s<n+I?n-s:I-s,T=o,U=z/T;N=Math.abs(Math.atan2(d*x,-O)/3);var W=-d,B=(n=(i=2*Math.sqrt(-S))*(L=Math.cos(N)))+(I=i*(-L/2-P*Math.sin(N)))<2*u?n+u:I+u,V=W/B,Z=-z*B-T*W,k=(u*Z-s*(z*W))/(-s*Z+u*(T*B));return U<=k?U<=V?k<=V?[U,k,V]:[U,V,k]:[V,U,k]:U<=V?[k,U,V]:k<=V?[k,V,U]:[V,k,U]}O.computeDiscriminant=function(e,r,t,a){if("number"!=typeof e)throw new P.DeveloperError("a is a required number.");if("number"!=typeof r)throw new P.DeveloperError("b is a required number.");if("number"!=typeof t)throw new P.DeveloperError("c is a required number.");if("number"!=typeof a)throw new P.DeveloperError("d is a required number.");var i=r*r,n=t*t;return 18*e*r*t*a+i*n-27*(e*e)*(a*a)-4*(e*n*t+i*r*a)},O.computeRealRoots=function(e,r,t,a){if("number"!=typeof e)throw new P.DeveloperError("a is a required number.");if("number"!=typeof r)throw new P.DeveloperError("b is a required number.");if("number"!=typeof t)throw new P.DeveloperError("c is a required number.");if("number"!=typeof a)throw new P.DeveloperError("d is a required number.");var i,n;if(0===e)return U.computeRealRoots(r,t,a);if(0!==r)return 0===t?0===a?(n=-r/e)<0?[n,0,0]:[0,0,n]:s(e,r,0,a):0===a?0===(i=U.computeRealRoots(e,r,t)).length?[0]:i[1]<=0?[i[0],i[1],0]:0<=i[0]?[0,i[0],i[1]]:[i[0],0,i[1]]:s(e,r,t,a);if(0!==t)return 0===a?0===(i=U.computeRealRoots(e,0,t)).Length?[0]:[i[0],0,i[1]]:s(e,0,t,a);if(0===a)return[0,0,0];var o=(n=-a/e)<0?-Math.pow(-n,1/3):Math.pow(n,1/3);return[o,o,o]};var W={};function f(e,r,t,a){var i=e*e,n=r-3*i/8,o=t-r*e/2+i*e/8,s=a-t*e/4+r*i/16-3*i*i/256,u=O.computeRealRoots(1,2*n,n*n-4*s,-o*o);if(0<u.length){var d=-e/4,f=u[u.length-1];if(Math.abs(f)<I.CesiumMath.EPSILON14){var l=U.computeRealRoots(1,n,s);if(2===l.length){var h,m=l[0],p=l[1];if(0<=m&&0<=p){var c=Math.sqrt(m),C=Math.sqrt(p);return[d-C,d-c,d+c,d+C]}if(0<=m&&p<0)return[d-(h=Math.sqrt(m)),d+h];if(m<0&&0<=p)return[d-(h=Math.sqrt(p)),d+h]}return[]}if(0<f){var w=Math.sqrt(f),v=(n+f-o/w)/2,M=(n+f+o/w)/2,b=U.computeRealRoots(1,w,v),g=U.computeRealRoots(1,-w,M);return 0!==b.length?(b[0]+=d,b[1]+=d,0!==g.length?(g[0]+=d,g[1]+=d,b[1]<=g[0]?[b[0],b[1],g[0],g[1]]:g[1]<=b[0]?[g[0],g[1],b[0],b[1]]:b[0]>=g[0]&&b[1]<=g[1]?[g[0],b[0],b[1],g[1]]:g[0]>=b[0]&&g[1]<=b[1]?[b[0],g[0],g[1],b[1]]:b[0]>g[0]&&b[0]<g[1]?[g[0],b[0],g[1],b[1]]:[b[0],g[0],b[1],g[1]]):b):0!==g.length?(g[0]+=d,g[1]+=d,g):[]}}return[]}function l(e,r,t,a){var i=e*e,n=-2*r,o=t*e+r*r-4*a,s=i*a-t*r*e+t*t,u=O.computeRealRoots(1,n,o,s);if(0<u.length){var d,f,l,h,m,p,c=u[0],C=r-c,w=C*C,v=e/2,M=C/2,b=w-4*a,g=w+4*Math.abs(a),q=i-4*c,E=i+4*Math.abs(c);if(c<0||b*E<q*g){var y=Math.sqrt(q);d=y/2,f=0===y?0:(e*M-t)/y}else{var D=Math.sqrt(b);d=0===D?0:(e*M-t)/D,f=D/2}0===v&&0===d?h=l=0:I.CesiumMath.sign(v)===I.CesiumMath.sign(d)?h=c/(l=v+d):l=c/(h=v-d),0===M&&0===f?p=m=0:I.CesiumMath.sign(M)===I.CesiumMath.sign(f)?p=a/(m=M+f):m=a/(p=M-f);var R=U.computeRealRoots(1,l,m),S=U.computeRealRoots(1,h,p);if(0!==R.length)return 0!==S.length?R[1]<=S[0]?[R[0],R[1],S[0],S[1]]:S[1]<=R[0]?[S[0],S[1],R[0],R[1]]:R[0]>=S[0]&&R[1]<=S[1]?[S[0],R[0],R[1],S[1]]:S[0]>=R[0]&&S[1]<=R[1]?[R[0],S[0],S[1],R[1]]:R[0]>S[0]&&R[0]<S[1]?[S[0],R[0],S[1],R[1]]:[R[0],S[0],R[1],S[1]]:R;if(0!==S.length)return S}return[]}function t(e,r){r=z.Cartesian3.clone(x.defaultValue(r,z.Cartesian3.ZERO)),z.Cartesian3.equals(r,z.Cartesian3.ZERO)||z.Cartesian3.normalize(r,r),this.origin=z.Cartesian3.clone(x.defaultValue(e,z.Cartesian3.ZERO)),this.direction=r}W.computeDiscriminant=function(e,r,t,a,i){if("number"!=typeof e)throw new P.DeveloperError("a is a required number.");if("number"!=typeof r)throw new P.DeveloperError("b is a required number.");if("number"!=typeof t)throw new P.DeveloperError("c is a required number.");if("number"!=typeof a)throw new P.DeveloperError("d is a required number.");if("number"!=typeof i)throw new P.DeveloperError("e is a required number.");var n=e*e,o=r*r,s=o*r,u=t*t,d=u*t,f=a*a,l=f*a,h=i*i;return o*u*f-4*s*l-4*e*d*f+18*e*r*t*l-27*n*f*f+256*(n*e)*(h*i)+i*(18*s*t*a-4*o*d+16*e*u*u-80*e*r*u*a-6*e*o*f+144*n*t*f)+h*(144*e*o*t-27*o*o-128*n*u-192*n*r*a)},W.computeRealRoots=function(e,r,t,a,i){if("number"!=typeof e)throw new P.DeveloperError("a is a required number.");if("number"!=typeof r)throw new P.DeveloperError("b is a required number.");if("number"!=typeof t)throw new P.DeveloperError("c is a required number.");if("number"!=typeof a)throw new P.DeveloperError("d is a required number.");if("number"!=typeof i)throw new P.DeveloperError("e is a required number.");if(Math.abs(e)<I.CesiumMath.EPSILON15)return O.computeRealRoots(r,t,a,i);var n=r/e,o=t/e,s=a/e,u=i/e,d=n<0?1:0;switch(d+=o<0?d+1:d,d+=s<0?d+1:d,d+=u<0?d+1:d){case 0:return f(n,o,s,u);case 1:case 2:return l(n,o,s,u);case 3:case 4:return f(n,o,s,u);case 5:return l(n,o,s,u);case 6:case 7:return f(n,o,s,u);case 8:return l(n,o,s,u);case 9:case 10:return f(n,o,s,u);case 11:return l(n,o,s,u);case 12:case 13:case 14:case 15:return f(n,o,s,u);default:return}},t.clone=function(e,r){if(x.defined(e))return x.defined(r)?(r.origin=z.Cartesian3.clone(e.origin),r.direction=z.Cartesian3.clone(e.direction),r):new t(e.origin,e.direction)},t.getPoint=function(e,r,t){return P.Check.typeOf.object("ray",e),P.Check.typeOf.number("t",r),x.defined(t)||(t=new z.Cartesian3),t=z.Cartesian3.multiplyByScalar(e.direction,r,t),z.Cartesian3.add(e.origin,t,t)};var h={rayPlane:function(e,r,t){if(!x.defined(e))throw new P.DeveloperError("ray is required.");if(!x.defined(r))throw new P.DeveloperError("plane is required.");x.defined(t)||(t=new z.Cartesian3);var a=e.origin,i=e.direction,n=r.normal,o=z.Cartesian3.dot(n,i);if(!(Math.abs(o)<I.CesiumMath.EPSILON15)){var s=(-r.distance-z.Cartesian3.dot(n,a))/o;if(!(s<0))return t=z.Cartesian3.multiplyByScalar(i,s,t),z.Cartesian3.add(a,t,t)}}},w=new z.Cartesian3,v=new z.Cartesian3,M=new z.Cartesian3,b=new z.Cartesian3,g=new z.Cartesian3;h.rayTriangleParametric=function(e,r,t,a,i){if(!x.defined(e))throw new P.DeveloperError("ray is required.");if(!x.defined(r))throw new P.DeveloperError("p0 is required.");if(!x.defined(t))throw new P.DeveloperError("p1 is required.");if(!x.defined(a))throw new P.DeveloperError("p2 is required.");i=x.defaultValue(i,!1);var n,o,s,u,d,f=e.origin,l=e.direction,h=z.Cartesian3.subtract(t,r,w),m=z.Cartesian3.subtract(a,r,v),p=z.Cartesian3.cross(l,m,M),c=z.Cartesian3.dot(h,p);if(i){if(c<I.CesiumMath.EPSILON6)return;if(n=z.Cartesian3.subtract(f,r,b),(s=z.Cartesian3.dot(n,p))<0||c<s)return;if(o=z.Cartesian3.cross(n,h,g),(u=z.Cartesian3.dot(l,o))<0||c<s+u)return;d=z.Cartesian3.dot(m,o)/c}else{if(Math.abs(c)<I.CesiumMath.EPSILON6)return;var C=1/c;if(n=z.Cartesian3.subtract(f,r,b),(s=z.Cartesian3.dot(n,p)*C)<0||1<s)return;if(o=z.Cartesian3.cross(n,h,g),(u=z.Cartesian3.dot(l,o)*C)<0||1<s+u)return;d=z.Cartesian3.dot(m,o)*C}return d},h.rayTriangle=function(e,r,t,a,i,n){var o=h.rayTriangleParametric(e,r,t,a,i);if(x.defined(o)&&!(o<0))return x.defined(n)||(n=new z.Cartesian3),z.Cartesian3.multiplyByScalar(e.direction,o,n),z.Cartesian3.add(e.origin,n,n)};var m=new t;h.lineSegmentTriangle=function(e,r,t,a,i,n,o){if(!x.defined(e))throw new P.DeveloperError("v0 is required.");if(!x.defined(r))throw new P.DeveloperError("v1 is required.");if(!x.defined(t))throw new P.DeveloperError("p0 is required.");if(!x.defined(a))throw new P.DeveloperError("p1 is required.");if(!x.defined(i))throw new P.DeveloperError("p2 is required.");var s=m;z.Cartesian3.clone(e,s.origin),z.Cartesian3.subtract(r,e,s.direction),z.Cartesian3.normalize(s.direction,s.direction);var u=h.rayTriangleParametric(s,t,a,i,n);if(!(!x.defined(u)||u<0||u>z.Cartesian3.distance(e,r)))return x.defined(o)||(o=new z.Cartesian3),z.Cartesian3.multiplyByScalar(s.direction,u,o),z.Cartesian3.add(s.origin,o,o)};var p={root0:0,root1:0};function u(e,r,t){x.defined(t)||(t=new T.Interval);var a=e.origin,i=e.direction,n=r.center,o=r.radius*r.radius,s=z.Cartesian3.subtract(a,n,M),u=function(e,r,t,a){var i=r*r-4*e*t;if(!(i<0)){if(0<i){var n=1/(2*e),o=Math.sqrt(i),s=(-r+o)*n,u=(-r-o)*n;return a.root1=s<u?(a.root0=s,u):(a.root0=u,s),a}var d=-r/(2*e);if(0!==d)return a.root0=a.root1=d,a}}(z.Cartesian3.dot(i,i),2*z.Cartesian3.dot(i,s),z.Cartesian3.magnitudeSquared(s)-o,p);if(x.defined(u))return t.start=u.root0,t.stop=u.root1,t}h.raySphere=function(e,r,t){if(!x.defined(e))throw new P.DeveloperError("ray is required.");if(!x.defined(r))throw new P.DeveloperError("sphere is required.");if(t=u(e,r,t),x.defined(t)&&!(t.stop<0))return t.start=Math.max(t.start,0),t};var c=new t;h.lineSegmentSphere=function(e,r,t,a){if(!x.defined(e))throw new P.DeveloperError("p0 is required.");if(!x.defined(r))throw new P.DeveloperError("p1 is required.");if(!x.defined(t))throw new P.DeveloperError("sphere is required.");var i=c;z.Cartesian3.clone(e,i.origin);var n=z.Cartesian3.subtract(r,e,i.direction),o=z.Cartesian3.magnitude(n);if(z.Cartesian3.normalize(n,n),a=u(i,t,a),!(!x.defined(a)||a.stop<0||a.start>o))return a.start=Math.max(a.start,0),a.stop=Math.min(a.stop,o),a};var C=new z.Cartesian3,q=new z.Cartesian3;function B(e,r,t){var a=e+r;return I.CesiumMath.sign(e)!==I.CesiumMath.sign(r)&&Math.abs(a/Math.max(Math.abs(e),Math.abs(r)))<t?0:a}h.rayEllipsoid=function(e,r){if(!x.defined(e))throw new P.DeveloperError("ray is required.");if(!x.defined(r))throw new P.DeveloperError("ellipsoid is required.");var t,a,i,n,o,s=r.oneOverRadii,u=z.Cartesian3.multiplyComponents(s,e.origin,C),d=z.Cartesian3.multiplyComponents(s,e.direction,q),f=z.Cartesian3.magnitudeSquared(u),l=z.Cartesian3.dot(u,d);if(1<f){if(0<=l)return;var h=l*l;if(t=f-1,h<(i=(a=z.Cartesian3.magnitudeSquared(d))*t))return;if(i<h){n=l*l-i;var m=(o=-l+Math.sqrt(n))/a,p=t/o;return m<p?new T.Interval(m,p):{start:p,stop:m}}var c=Math.sqrt(t/a);return new T.Interval(c,c)}return f<1?(t=f-1,n=l*l-(i=(a=z.Cartesian3.magnitudeSquared(d))*t),o=-l+Math.sqrt(n),new T.Interval(0,o/a)):l<0?(a=z.Cartesian3.magnitudeSquared(d),new T.Interval(0,-l/a)):void 0};var N=new z.Cartesian3,L=new z.Cartesian3,V=new z.Cartesian3,Z=new z.Cartesian3,k=new z.Cartesian3,A=new T.Matrix3,j=new T.Matrix3,F=new T.Matrix3,G=new T.Matrix3,Y=new T.Matrix3,_=new T.Matrix3,H=new T.Matrix3,J=new z.Cartesian3,K=new z.Cartesian3,Q=new z.Cartographic;h.grazingAltitudeLocation=function(e,r){if(!x.defined(e))throw new P.DeveloperError("ray is required.");if(!x.defined(r))throw new P.DeveloperError("ellipsoid is required.");var t=e.origin,a=e.direction;if(!z.Cartesian3.equals(t,z.Cartesian3.ZERO)){var i=r.geodeticSurfaceNormal(t,N);if(0<=z.Cartesian3.dot(a,i))return t}var n=x.defined(this.rayEllipsoid(e,r)),o=r.transformPositionToScaledSpace(a,N),s=z.Cartesian3.normalize(o,o),u=z.Cartesian3.mostOrthogonalAxis(o,Z),d=z.Cartesian3.normalize(z.Cartesian3.cross(u,s,L),L),f=z.Cartesian3.normalize(z.Cartesian3.cross(s,d,V),V),l=A;l[0]=s.x,l[1]=s.y,l[2]=s.z,l[3]=d.x,l[4]=d.y,l[5]=d.z,l[6]=f.x,l[7]=f.y,l[8]=f.z;var h=T.Matrix3.transpose(l,j),m=T.Matrix3.fromScale(r.radii,F),p=T.Matrix3.fromScale(r.oneOverRadii,G),c=Y;c[0]=0,c[1]=-a.z,c[2]=a.y,c[3]=a.z,c[4]=0,c[5]=-a.x,c[6]=-a.y,c[7]=a.x,c[8]=0;var C,w,v=T.Matrix3.multiply(T.Matrix3.multiply(h,p,_),c,_),M=T.Matrix3.multiply(T.Matrix3.multiply(v,m,H),l,H),b=T.Matrix3.multiplyByVector(v,t,k),g=function(e,r,t,a,i){var n,o=a*a,s=i*i,u=(e[T.Matrix3.COLUMN1ROW1]-e[T.Matrix3.COLUMN2ROW2])*s,d=i*(a*B(e[T.Matrix3.COLUMN1ROW0],e[T.Matrix3.COLUMN0ROW1],I.CesiumMath.EPSILON15)+r.y),f=e[T.Matrix3.COLUMN0ROW0]*o+e[T.Matrix3.COLUMN2ROW2]*s+a*r.x+t,l=s*B(e[T.Matrix3.COLUMN2ROW1],e[T.Matrix3.COLUMN1ROW2],I.CesiumMath.EPSILON15),h=i*(a*B(e[T.Matrix3.COLUMN2ROW0],e[T.Matrix3.COLUMN0ROW2])+r.z),m=[];if(0===h&&0===l){if(0===(n=U.computeRealRoots(u,d,f)).length)return m;var p=n[0],c=Math.sqrt(Math.max(1-p*p,0));if(m.push(new z.Cartesian3(a,i*p,i*-c)),m.push(new z.Cartesian3(a,i*p,i*c)),2===n.length){var C=n[1],w=Math.sqrt(Math.max(1-C*C,0));m.push(new z.Cartesian3(a,i*C,i*-w)),m.push(new z.Cartesian3(a,i*C,i*w))}return m}var v=h*h,M=l*l,b=h*l,g=u*u+M,q=2*(d*u+b),E=2*f*u+d*d-M+v,y=2*(f*d-b),D=f*f-v;if(0===g&&0===q&&0===E&&0===y)return m;var R=(n=W.computeRealRoots(g,q,E,y,D)).length;if(0===R)return m;for(var S=0;S<R;++S){var O=n[S],x=O*O,P=Math.max(1-x,0),N=Math.sqrt(P),L=(I.CesiumMath.sign(u)===I.CesiumMath.sign(f)?B(u*x+f,d*O,I.CesiumMath.EPSILON12):I.CesiumMath.sign(f)===I.CesiumMath.sign(d*O)?B(u*x,d*O+f,I.CesiumMath.EPSILON12):B(u*x+d*O,f,I.CesiumMath.EPSILON12))*B(l*O,h,I.CesiumMath.EPSILON15);L<0?m.push(new z.Cartesian3(a,i*O,i*N)):0<L?m.push(new z.Cartesian3(a,i*O,i*-N)):0!==N?(m.push(new z.Cartesian3(a,i*O,i*-N)),m.push(new z.Cartesian3(a,i*O,i*N)),++S):m.push(new z.Cartesian3(a,i*O,i*N))}return m}(M,z.Cartesian3.negate(b,N),0,0,1),q=g.length;if(0<q){for(var E=z.Cartesian3.clone(z.Cartesian3.ZERO,K),y=Number.NEGATIVE_INFINITY,D=0;D<q;++D){C=T.Matrix3.multiplyByVector(m,T.Matrix3.multiplyByVector(l,g[D],J),J);var R=z.Cartesian3.normalize(z.Cartesian3.subtract(C,t,Z),Z),S=z.Cartesian3.dot(R,a);y<S&&(y=S,E=z.Cartesian3.clone(C,E))}var O=r.cartesianToCartographic(E,Q);return y=I.CesiumMath.clamp(y,0,1),w=z.Cartesian3.magnitude(z.Cartesian3.subtract(E,t,Z))*Math.sqrt(1-y*y),w=n?-w:w,O.height=w,r.cartographicToCartesian(O,new z.Cartesian3)}};var E=new z.Cartesian3;h.lineSegmentPlane=function(e,r,t,a){if(!x.defined(e))throw new P.DeveloperError("endPoint0 is required.");if(!x.defined(r))throw new P.DeveloperError("endPoint1 is required.");if(!x.defined(t))throw new P.DeveloperError("plane is required.");x.defined(a)||(a=new z.Cartesian3);var i=z.Cartesian3.subtract(r,e,E),n=t.normal,o=z.Cartesian3.dot(n,i);if(!(Math.abs(o)<I.CesiumMath.EPSILON6)){var s=z.Cartesian3.dot(n,e),u=-(t.distance+s)/o;if(!(u<0||1<u))return z.Cartesian3.multiplyByScalar(i,u,a),z.Cartesian3.add(e,a,a),a}},h.trianglePlaneIntersection=function(e,r,t,a){if(!(x.defined(e)&&x.defined(r)&&x.defined(t)&&x.defined(a)))throw new P.DeveloperError("p0, p1, p2, and plane are required.");var i,n,o=a.normal,s=a.distance,u=z.Cartesian3.dot(o,e)+s<0,d=z.Cartesian3.dot(o,r)+s<0,f=z.Cartesian3.dot(o,t)+s<0,l=0;if(l+=u?1:0,l+=d?1:0,1!==(l+=f?1:0)&&2!==l||(i=new z.Cartesian3,n=new z.Cartesian3),1===l){if(u)return h.lineSegmentPlane(e,r,a,i),h.lineSegmentPlane(e,t,a,n),{positions:[e,r,t,i,n],indices:[0,3,4,1,2,4,1,4,3]};if(d)return h.lineSegmentPlane(r,t,a,i),h.lineSegmentPlane(r,e,a,n),{positions:[e,r,t,i,n],indices:[1,3,4,2,0,4,2,4,3]};if(f)return h.lineSegmentPlane(t,e,a,i),h.lineSegmentPlane(t,r,a,n),{positions:[e,r,t,i,n],indices:[2,3,4,0,1,4,0,4,3]}}else if(2===l){if(!u)return h.lineSegmentPlane(r,e,a,i),h.lineSegmentPlane(t,e,a,n),{positions:[e,r,t,i,n],indices:[1,2,4,1,4,3,0,3,4]};if(!d)return h.lineSegmentPlane(t,r,a,i),h.lineSegmentPlane(e,r,a,n),{positions:[e,r,t,i,n],indices:[2,0,4,2,4,3,1,3,4]};if(!f)return h.lineSegmentPlane(e,t,a,i),h.lineSegmentPlane(r,t,a,n),{positions:[e,r,t,i,n],indices:[0,1,4,0,4,3,2,3,4]}}},e.IntersectionTests=h,e.Ray=t});