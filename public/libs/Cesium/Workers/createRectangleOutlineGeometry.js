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
define(["./when-8d13db60","./Check-70bec281","./Math-61ede240","./Cartographic-f27b0939","./Cartesian2-09435a6c","./BoundingSphere-c409f092","./Cartesian4-5af5bb24","./RuntimeError-ba10bc3e","./WebGLConstants-4c11ee5f","./ComponentDatatype-5862616f","./GeometryAttribute-2243653a","./PrimitiveType-97893bc7","./FeatureDetection-7bd32c34","./Transforms-1509c877","./buildModuleUrl-392763e2","./GeometryAttributes-aacecde6","./IndexDatatype-9435b55f","./arrayFill-9766fb2e","./GeometryOffsetAttribute-999fc023","./EllipsoidRhumbLine-6ca4b1e6","./earcut-2.2.1-b404d9e6","./PolygonPipeline-cc78b34e","./RectangleGeometryLibrary-c89ec784"],function(h,c,y,e,d,b,t,i,r,E,A,w,a,n,o,G,R,m,v,l,u,P,D){var _=new b.BoundingSphere,C=new b.BoundingSphere,L=new e.Cartesian3,S=new d.Rectangle;function x(e,t){var i=e._ellipsoid,r=t.height,a=t.width,n=t.northCap,o=t.southCap,l=r,u=2,s=0,c=4;n&&(u-=1,l-=1,s+=1,c-=2),o&&(u-=1,l-=1,s+=1,c-=2),s+=u*a+2*l-c;var d,p=new Float64Array(3*s),f=0,g=0,h=L;if(n)D.RectangleGeometryLibrary.computePosition(t,i,!1,g,0,h),p[f++]=h.x,p[f++]=h.y,p[f++]=h.z;else for(d=0;d<a;d++)D.RectangleGeometryLibrary.computePosition(t,i,!1,g,d,h),p[f++]=h.x,p[f++]=h.y,p[f++]=h.z;for(d=a-1,g=1;g<r;g++)D.RectangleGeometryLibrary.computePosition(t,i,!1,g,d,h),p[f++]=h.x,p[f++]=h.y,p[f++]=h.z;if(g=r-1,!o)for(d=a-2;0<=d;d--)D.RectangleGeometryLibrary.computePosition(t,i,!1,g,d,h),p[f++]=h.x,p[f++]=h.y,p[f++]=h.z;for(d=0,g=r-2;0<g;g--)D.RectangleGeometryLibrary.computePosition(t,i,!1,g,d,h),p[f++]=h.x,p[f++]=h.y,p[f++]=h.z;for(var y=p.length/3*2,b=R.IndexDatatype.createTypedArray(p.length/3,y),m=0,v=0;v<p.length/3-1;v++)b[m++]=v,b[m++]=v+1;b[m++]=p.length/3-1,b[m++]=0;var _=new A.Geometry({attributes:new G.GeometryAttributes,primitiveType:w.PrimitiveType.LINES});return _.attributes.position=new A.GeometryAttribute({componentDatatype:E.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:p}),_.indices=b,_}function p(e){var t=(e=h.defaultValue(e,h.defaultValue.EMPTY_OBJECT)).rectangle,i=h.defaultValue(e.granularity,y.CesiumMath.RADIANS_PER_DEGREE),r=h.defaultValue(e.ellipsoid,d.Ellipsoid.WGS84),a=h.defaultValue(e.rotation,0);if(!h.defined(t))throw new c.DeveloperError("rectangle is required.");if(d.Rectangle.validate(t),t.north<t.south)throw new c.DeveloperError("options.rectangle.north must be greater than options.rectangle.south");var n=h.defaultValue(e.height,0),o=h.defaultValue(e.extrudedHeight,n);this._rectangle=d.Rectangle.clone(t),this._granularity=i,this._ellipsoid=r,this._surfaceHeight=Math.max(n,o),this._rotation=a,this._extrudedHeight=Math.min(n,o),this._offsetAttribute=e.offsetAttribute,this._workerName="createRectangleOutlineGeometry"}p.packedLength=d.Rectangle.packedLength+d.Ellipsoid.packedLength+5,p.pack=function(e,t,i){if(!h.defined(e))throw new c.DeveloperError("value is required");if(!h.defined(t))throw new c.DeveloperError("array is required");return i=h.defaultValue(i,0),d.Rectangle.pack(e._rectangle,t,i),i+=d.Rectangle.packedLength,d.Ellipsoid.pack(e._ellipsoid,t,i),i+=d.Ellipsoid.packedLength,t[i++]=e._granularity,t[i++]=e._surfaceHeight,t[i++]=e._rotation,t[i++]=e._extrudedHeight,t[i]=h.defaultValue(e._offsetAttribute,-1),t};var f=new d.Rectangle,g=d.Ellipsoid.clone(d.Ellipsoid.UNIT_SPHERE),H={rectangle:f,ellipsoid:g,granularity:void 0,height:void 0,rotation:void 0,extrudedHeight:void 0,offsetAttribute:void 0};p.unpack=function(e,t,i){if(!h.defined(e))throw new c.DeveloperError("array is required");t=h.defaultValue(t,0);var r=d.Rectangle.unpack(e,t,f);t+=d.Rectangle.packedLength;var a=d.Ellipsoid.unpack(e,t,g);t+=d.Ellipsoid.packedLength;var n=e[t++],o=e[t++],l=e[t++],u=e[t++],s=e[t];return h.defined(i)?(i._rectangle=d.Rectangle.clone(r,i._rectangle),i._ellipsoid=d.Ellipsoid.clone(a,i._ellipsoid),i._surfaceHeight=o,i._rotation=l,i._extrudedHeight=u,i._offsetAttribute=-1===s?void 0:s,i):(H.granularity=n,H.height=o,H.rotation=l,H.extrudedHeight=u,H.offsetAttribute=-1===s?void 0:s,new p(H))};var T=new e.Cartographic;return p.createGeometry=function(e){var t,i,r=e._rectangle,a=e._ellipsoid,n=D.RectangleGeometryLibrary.computeOptions(r,e._granularity,e._rotation,0,S,T);if(!y.CesiumMath.equalsEpsilon(r.north,r.south,y.CesiumMath.EPSILON10)&&!y.CesiumMath.equalsEpsilon(r.east,r.west,y.CesiumMath.EPSILON10)){var o,l=e._surfaceHeight,u=e._extrudedHeight;if(!y.CesiumMath.equalsEpsilon(l,u,0,y.CesiumMath.EPSILON2)){if(t=function(e,t){var i=e._surfaceHeight,r=e._extrudedHeight,a=e._ellipsoid,n=r,o=i,l=x(e,t),u=t.height,s=t.width,c=P.PolygonPipeline.scaleToGeodeticHeight(l.attributes.position.values,o,a,!1),d=c.length,p=new Float64Array(2*d);p.set(c);var f=P.PolygonPipeline.scaleToGeodeticHeight(l.attributes.position.values,n,a);p.set(f,d),l.attributes.position.values=p;var g=t.northCap,h=t.southCap,y=4;g&&(y-=1),h&&(y-=1);var b=2*(p.length/3+y),m=R.IndexDatatype.createTypedArray(p.length/3,b);d=p.length/6;for(var v,_=0,E=0;E<d-1;E++)m[_++]=E,m[_++]=E+1,m[_++]=E+d,m[_++]=E+d+1;if(m[_++]=d-1,m[_++]=0,m[_++]=d+d-1,m[_++]=d,m[_++]=0,m[_++]=d,g)v=u-1;else{var A=s-1;m[_++]=A,m[_++]=A+d,v=s+u-2}if(m[_++]=v,m[_++]=v+d,!h){var w=s+v-1;m[_++]=w,m[_]=w+d}return l.indices=m,l}(e,n),h.defined(e._offsetAttribute)){var s=t.attributes.position.values.length/3,c=new Uint8Array(s);c=e._offsetAttribute===v.GeometryOffsetAttribute.TOP?m.arrayFill(c,1,0,s/2):(o=e._offsetAttribute===v.GeometryOffsetAttribute.NONE?0:1,m.arrayFill(c,o)),t.attributes.applyOffset=new A.GeometryAttribute({componentDatatype:E.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:c})}var d=b.BoundingSphere.fromRectangle3D(r,a,l,C),p=b.BoundingSphere.fromRectangle3D(r,a,u,_);i=b.BoundingSphere.union(d,p)}else{if((t=x(e,n)).attributes.position.values=P.PolygonPipeline.scaleToGeodeticHeight(t.attributes.position.values,l,a,!1),h.defined(e._offsetAttribute)){var f=t.attributes.position.values.length,g=new Uint8Array(f/3);o=e._offsetAttribute===v.GeometryOffsetAttribute.NONE?0:1,m.arrayFill(g,o),t.attributes.applyOffset=new A.GeometryAttribute({componentDatatype:E.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:g})}i=b.BoundingSphere.fromRectangle3D(r,a,l)}return new A.Geometry({attributes:t.attributes,indices:t.indices,primitiveType:w.PrimitiveType.LINES,boundingSphere:i,offsetAttribute:e._offsetAttribute})}},function(e,t){return h.defined(t)&&(e=p.unpack(e,t)),e._ellipsoid=d.Ellipsoid.clone(e._ellipsoid),e._rectangle=d.Rectangle.clone(e._rectangle),p.createGeometry(e)}});