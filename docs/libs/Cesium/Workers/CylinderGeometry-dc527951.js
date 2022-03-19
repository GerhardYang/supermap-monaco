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
define(["exports","./when-8d13db60","./Check-70bec281","./Math-61ede240","./Cartographic-f27b0939","./Cartesian2-09435a6c","./BoundingSphere-c409f092","./ComponentDatatype-5862616f","./GeometryAttribute-2243653a","./PrimitiveType-97893bc7","./GeometryAttributes-aacecde6","./IndexDatatype-9435b55f","./arrayFill-9766fb2e","./GeometryOffsetAttribute-999fc023","./VertexFormat-fe4db402","./CylinderGeometryLibrary-8c0fda9f"],function(e,I,f,S,U,B,q,Y,Z,J,W,j,H,K,m,Q){var X=new B.Cartesian2,$=new U.Cartesian3,ee=new U.Cartesian3,te=new U.Cartesian3,re=new U.Cartesian3;function d(e){var t=(e=I.defaultValue(e,I.defaultValue.EMPTY_OBJECT)).length,r=e.topRadius,a=e.bottomRadius,o=I.defaultValue(e.vertexFormat,m.VertexFormat.DEFAULT),n=I.defaultValue(e.slices,128);if(!I.defined(t))throw new f.DeveloperError("options.length must be defined.");if(!I.defined(r))throw new f.DeveloperError("options.topRadius must be defined.");if(!I.defined(a))throw new f.DeveloperError("options.bottomRadius must be defined.");if(n<3)throw new f.DeveloperError("options.slices must be greater than or equal to 3.");if(I.defined(e.offsetAttribute)&&e.offsetAttribute===K.GeometryOffsetAttribute.TOP)throw new f.DeveloperError("GeometryOffsetAttribute.TOP is not a supported options.offsetAttribute for this geometry.");this._length=t,this._topRadius=r,this._bottomRadius=a,this._vertexFormat=m.VertexFormat.clone(o),this._slices=n,this._offsetAttribute=e.offsetAttribute,this._workerName="createCylinderGeometry"}d.packedLength=m.VertexFormat.packedLength+5,d.pack=function(e,t,r){if(!I.defined(e))throw new f.DeveloperError("value is required");if(!I.defined(t))throw new f.DeveloperError("array is required");return r=I.defaultValue(r,0),m.VertexFormat.pack(e._vertexFormat,t,r),r+=m.VertexFormat.packedLength,t[r++]=e._length,t[r++]=e._topRadius,t[r++]=e._bottomRadius,t[r++]=e._slices,t[r]=I.defaultValue(e._offsetAttribute,-1),t};var t,p=new m.VertexFormat,l={vertexFormat:p,length:void 0,topRadius:void 0,bottomRadius:void 0,slices:void 0,offsetAttribute:void 0};d.unpack=function(e,t,r){if(!I.defined(e))throw new f.DeveloperError("array is required");t=I.defaultValue(t,0);var a=m.VertexFormat.unpack(e,t,p);t+=m.VertexFormat.packedLength;var o=e[t++],n=e[t++],i=e[t++],s=e[t++],u=e[t];return I.defined(r)?(r._vertexFormat=m.VertexFormat.clone(a,r._vertexFormat),r._length=o,r._topRadius=n,r._bottomRadius=i,r._slices=s,r._offsetAttribute=-1===u?void 0:u,r):(l.length=o,l.topRadius=n,l.bottomRadius=i,l.slices=s,l.offsetAttribute=-1===u?void 0:u,new d(l))},d.createGeometry=function(e){var t=e._length,r=e._topRadius,a=e._bottomRadius,o=e._vertexFormat,n=e._slices;if(!(t<=0||r<0||a<0||0===r&&0===a)){var i,s=n+n,u=n+s,f=s+s,m=Q.CylinderGeometryLibrary.computePositions(t,r,a,n,!0),d=o.st?new Float32Array(2*f):void 0,p=o.normal?new Float32Array(3*f):void 0,l=o.tangent?new Float32Array(3*f):void 0,y=o.bitangent?new Float32Array(3*f):void 0,b=o.normal||o.tangent||o.bitangent;if(b){var c=o.tangent||o.bitangent,v=0,h=0,A=0,w=Math.atan2(a-r,t),g=$;g.z=Math.sin(w);var x=Math.cos(w),_=te,C=ee;for(i=0;i<n;i++){var F=i/n*S.CesiumMath.TWO_PI,D=x*Math.cos(F),G=x*Math.sin(F);b&&(g.x=D,g.y=G,c&&(_=U.Cartesian3.normalize(U.Cartesian3.cross(U.Cartesian3.UNIT_Z,g,_),_)),o.normal&&(p[v++]=g.x,p[v++]=g.y,p[v++]=g.z,p[v++]=g.x,p[v++]=g.y,p[v++]=g.z),o.tangent&&(l[h++]=_.x,l[h++]=_.y,l[h++]=_.z,l[h++]=_.x,l[h++]=_.y,l[h++]=_.z),o.bitangent&&(C=U.Cartesian3.normalize(U.Cartesian3.cross(g,_,C),C),y[A++]=C.x,y[A++]=C.y,y[A++]=C.z,y[A++]=C.x,y[A++]=C.y,y[A++]=C.z))}for(i=0;i<n;i++)o.normal&&(p[v++]=0,p[v++]=0,p[v++]=-1),o.tangent&&(l[h++]=1,l[h++]=0,l[h++]=0),o.bitangent&&(y[A++]=0,y[A++]=-1,y[A++]=0);for(i=0;i<n;i++)o.normal&&(p[v++]=0,p[v++]=0,p[v++]=1),o.tangent&&(l[h++]=1,l[h++]=0,l[h++]=0),o.bitangent&&(y[A++]=0,y[A++]=1,y[A++]=0)}var R=12*n-12,O=j.IndexDatatype.createTypedArray(f,R),T=0,V=0;for(i=0;i<n-1;i++)O[T++]=V,O[T++]=V+2,O[T++]=V+3,O[T++]=V,O[T++]=V+3,O[T++]=V+1,V+=2;for(O[T++]=s-2,O[T++]=0,O[T++]=1,O[T++]=s-2,O[T++]=1,O[T++]=s-1,i=1;i<n-1;i++)O[T++]=s+i+1,O[T++]=s+i,O[T++]=s;for(i=1;i<n-1;i++)O[T++]=u,O[T++]=u+i,O[T++]=u+i+1;var E=0;if(o.st){var L=Math.max(r,a);for(i=0;i<f;i++){var P=U.Cartesian3.fromArray(m,3*i,re);d[E++]=(P.x+L)/(2*L),d[E++]=(P.y+L)/(2*L)}}var k=new W.GeometryAttributes;o.position&&(k.position=new Z.GeometryAttribute({componentDatatype:Y.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:m})),o.normal&&(k.normal=new Z.GeometryAttribute({componentDatatype:Y.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:p})),o.tangent&&(k.tangent=new Z.GeometryAttribute({componentDatatype:Y.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:l})),o.bitangent&&(k.bitangent=new Z.GeometryAttribute({componentDatatype:Y.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:y})),o.st&&(k.st=new Z.GeometryAttribute({componentDatatype:Y.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:d})),X.x=.5*t,X.y=Math.max(a,r);var M=new q.BoundingSphere(U.Cartesian3.ZERO,B.Cartesian2.magnitude(X));if(I.defined(e._offsetAttribute)){t=m.length;var z=new Uint8Array(t/3),N=e._offsetAttribute===K.GeometryOffsetAttribute.NONE?0:1;H.arrayFill(z,N),k.applyOffset=new Z.GeometryAttribute({componentDatatype:Y.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:z})}return new Z.Geometry({attributes:k,indices:O,primitiveType:J.PrimitiveType.TRIANGLES,boundingSphere:M,offsetAttribute:e._offsetAttribute})}},d.getUnitCylinder=function(){return I.defined(t)||(t=d.createGeometry(new d({topRadius:1,bottomRadius:1,length:1,vertexFormat:m.VertexFormat.POSITION_ONLY}))),t},e.CylinderGeometry=d});