(function(){var M={Version:"7.1.5021.16204"};window.cfx.Rose=M;var L=window.cfx,b=window.sfx,l=function u(){u._ic()};l.prototype={_0dN:function(){return this}};l.h=function(u){return u*b.a.c/180};l.f=function(u){return b.a.j(u+1.0E-13)};l.e=function(u,i,a){var g=0;a&&(i.w<i.h?(g=b.u.z(i.h-i.w,2),i.h=i.w,i.y+=g):(g=b.u.z(i.w-i.h,2),i.w=i.h,i.x+=g));i.w-=i.w%4;i.h-=i.h%4;u.c=b.u.z(i.w,2);u.d=b.u.z(i.h,2);u.a=b.u.z(i.g()+i.x,2);u.b=b.u.z(i.y+i.c(),2)};l.d=function(b){for(;360<=b.a;)b.a-=360;for(;0>b.a;)b.a+=
360};l.a=function(u,i,a,g,c,m){var e;e=new b._p2(0,0);l.b(e,i,a,g,c,m);i=e.a;e=e.b;u.b=b.a.j(e+0.5);u.a=b.a.j(i+0.5)};l.b=function(u,i,a,g,c,m){var e=l.h(i),i=b.a.q(e),e=b.a.h(e);0==i&&0==e&&(i=0,e=1);u.b=m+g*i;u.a=c+a*e};l.c=function(b,i){var a=b._nc();b._cf(i);i._cf(a)};l._dt("CWGM",b.Sy,0);var E=function i(){i._ic();this.i=!1;this.c=this.f=0;this.h=!1;this.e=null;this.d=this.b=0;this.g=!1};E.prototype={_0dO:function(){this.a=new b.e;return this},j:function(b){return this.i?this.f*b-this.d:-(this.d+
this.f*b)}};E._dt("CWGR",b.Sy,0);var K=function a(){a._ic();this.a=this.b=null;this._0Rose()};M.Rose=K;K.prototype={_0Rose:function(){this.c=3;this.g=0;this.f=!0;this.e=90;return this},getCircular:function(){return 0!=(this.c&2)},setCircular:function(a){this.h(2,a)},getClockwise:function(){return 0!=(this.c&1)},setClockwise:function(a){this.h(1,a)},getInternalRadius:function(){return this.g},setInternalRadius:function(a){this.g=a},l:function(){return 0!=(this.c&4)},sl:function(a){this.h(4,a)},getSideBySide:function(){return this.f},
setSideBySide:function(a){this.f=a},getStartAngle:function(){return this.e},setStartAngle:function(a){this.e=a},getTemplate:function(){return null==this.b?null:this.b.u()},setTemplate:function(a){null==this.b&&(this.b=(new _Zt)._0_Zt());this.b.su(a)},k:function(a){return this.a.j(a)},reset:function(){},icV:function(){return 1},icW:function(){var a=33563152;this.f&&(a|=128);return a},icU:function(a,b,c){switch(b){case 11:return this.m(c)}return null},icX:function(a,g,c){g=c.a.b.iaH();this.a=(new E)._0dO();
this.a.f=360/g;this.a.i=this.getClockwise();this.a.d=this.e;if(null!=this.b&&null!=this.b.u()){this.a.g=!0;for(var m=this.b.id().Sb();!0==m.SI();)switch(m.SK().bA()){case "GT":case "GeometryTop":this.a.h=!0}}m=!1;0!=c.b.c&&(m=!0,this.a.e=Array(g));a.a=1;a.b=0;var e=c.v._nc();if(c.j.getVisible()){var h=new b.g,f=c.j.getLabelsCore();if(0!=f.Se()){var j=new b._p1(!1),f=f.id$(j,c.c,c.j.getFont(),!1);h._cf(f)}else f=b.b.j(c.bb,"{0}",g),h._cf(c.c.idV(f,c.j.getFont()).c());e.m(-h.w,-h.h)}var d;d=new b._pN(0,
0,0,0);l.e(d,e,!0);f=d.a;j=d.b;h=d.c;d=d.d;h=b.a.n(h,1);d=b.a.n(d,1);this.a.b=b.a.o(h,d);this.a.c=this.g*this.a.b/100;this.a.a._i1(f,j);j=0!=(c.t&2);f=0;f=0>=c.j.C?j?45:360/g:c.j.getStep();this.getClockwise()||(f=-f);e=this.r(c,e,f);if(this.o(c,f,e,this.getCircular())){e=!1;j=f=0;d=!1;for(var k=b.a.o(c.p,c.q),G=b.a.n(c.p,c.q);k<=G;k++)if(c.d=k,c.aI(k),!c.g(8192)){for(var o=c.I,s=c.F,t=(h-this.a.c)/(s-o),r=0;r<g;r++){c.e=r;c.aw();c.ao(c.d,c.e,!1);c.N(!0);c.aQ(c.d,c.e,!1);var n=c.G,p=0;d&&(p=this.a.e[r],
n+=p);if(1.0E108==n)n=0;else if(n<=s&&n>=o&&!this.q(c,(p-o)*t,(n-o)*t,d)){f=k;j=r;e=!0;break}m&&(this.a.e[r]=n);c.an(0,1)}m&&(d=!0);if(e)break}e?(c.d=f,c.e=j,a.b=0,a.a=a.b):(c.ak-=g-1,c.e=c.o);this.a=null}},r:function(a,g,c){var m=a.j,e=a.w(512),h=b.e._ca(3);h[0]._cf(this.a.a);var f=this.getCircular(),j=this.l(),d=a.bk()._nc(),k=b.a.d(360/c),G=0,o=0,s=0;j&&0!=d.a&&!e?(G=b.u.z(d.r,k+1),o=b.u.z(d.g,k+1),s=b.u.z(d.b,k+1)):(j=!1,G=o=s=0);var t=(new b.ar)._0ar(d),r=a.j.L.c(b.m.b._nc()),n=a.h.L.c(b.m.b._nc());
f&&!a.m_bDetecting&&(j||a.c.idJ(t,g.x,g.y,2*this.a.b,2*this.a.b),a.c.idh(r,g.x,g.y,2*this.a.b,2*this.a.b));var p=m.c.a,q=p.o,D=null;q&&(D=a.a5(p,4));var B=m.getLabelsCore(),N=B.Se(),C=m.getFont(),e=e?b.m.c():m.getTextColor()._nc(),v=0!=(a.t&2)?0:270,x=d._nc(),I=t;a.c.sida(null);var z,y;y=new b._p2(0,0);l.a(y,v,this.a.b,this.a.b,this.a.a.x,this.a.a.y);z=y.a;y=y.b;var F=null,w=0!=(a.r&8),E=null;w&&(F=(new L.c0)._01c0("PlotArea"),E=m.buildGridUIObject(p));for(p=0;p<k;p++){var J=!a.m_bDetecting&&m.getVisible();
J&&(w&&a.c.sida(m),K.p(a,k,B,N,C,e,z,y,v,p));v+=c;v=new b._p1(v);l.d(v);var v=v.a,A=0,H=0,H=new b._p2(A,H);l.a(H,v,this.a.b,this.a.b,this.a.a.x,this.a.a.y);A=H.a;H=H.b;h[1].x=z;h[1].y=y;h[2].x=A;h[2].y=H;this.getClockwise()&&l.c(h[1],h[2]);z=A;y=H;if(!a.m_bDetecting&&(j&&(I=(new b.ar)._0ar(x)),w&&a.c.sida(F),f?j&&a.c.idM(I,g,v-c,c):(a.c.idN(I,h),a.c.idq(r,z,y,A,H)),j&&I._d(),(0==p||q)&&J))a.c.sida(E),J=this.a.a.x,A=this.a.a.y,0!=this.a.c&&(A=new b._p2(J,A),l.b(A,v,this.a.c,this.a.c,this.a.a.x,this.a.a.y),
J=A.a,A=A.b),a.c.idq(0==p?n:D,J,A,z,y);j&&(p>=b.u.z(k+1,2)?p==k?x._cf(d):x._cf(b.m.k(d.a,x.r+G,x.g+o,x.b+s)):x._cf(b.m.k(d.a,x.r-G,x.g-o,x.b-s)))}r._d();n._d();null!=D&&D._d();t._d();return k},q:function(a,g,c,m){var e=this.a.c,h=(new b.aA)._0aA(),f=0,j=0;0==e?(f=a.b.x/100,j=(1-f)/2):(f=1,j=0);1!=a.Y&&(f/=a.Y,j+=a.Z*f);var d=this.k(a.e+j),k=this.k(a.e+j+f),f=(d+k)/2,l=new b.f,o=new b.f,s=new b.f,t=new b.f,r=2*e,n=this.a.a.x-e,p=this.a.a.y-e,j=new b.f;s._cf(this.d(d,0));t._cf(this.d(k,0));var q=this.d(f,
0)._nc();j._cf(this.d(f,c));var D=s.x-t.x,B=s.y-t.y;l._i1(j.x+D/2,j.y+B/2);o._i1(j.x-D/2,j.y-B/2);0!=g&&(q._cf(this.d(f,g)),s._i1(q.x+D/2,q.y+B/2),t._i1(q.x-D/2,q.y-B/2));q=null;this.a.h&&(q=(new b.aA)._0aA());0!=e?(m?(h.q(l,o),h.q(o,t),h.q(t,s)):(h.f((new b.d)._02d(n,p,r,r),k,d-k),h.q(s,l),h.q(l,o)),h.z(),null!=q&&q.q(l,o)):(e=2*c,m?(h.g(this.a.a.x-g,this.a.a.y-g,2*g,2*g,d,k-d),h.g(this.a.a.x-c,this.a.a.y-c,e,e,k,d-k)):(h.t(this.a.a.x,this.a.a.y,t.x,t.y),0<c&&h.g(this.a.a.x-c,this.a.a.y-c,e,e,k,
d-k),h.z()),null!=q&&q.g(this.a.a.x-c,this.a.a.y-c,e,e,k,d-k));if(this.a.g){g=b.d.b._nc();for(m=this.b.id().Sb();!0==m.SI();)switch(d=m.SK(),d.bA()){case "G":case "Geometry":d.sa(h);break;case "GT":case "GeometryTop":d.sa(q);break;case "SizeItem":d.sa(2*c);break;case "XItem":d.sa(this.a.a.x-c);break;case "YItem":d.sa(this.a.a.y-c);break;default:this.b.l(d,a,this,g)}this.b.q(a.c,g,1,0)}else a.c.idL(a.x,h),a.c.ids(a.n,h);if(a.m_bDetecting&&a.detectCheck())return a.t&=-2,!1;h._d();null!=q&&q._d();a.b.a.b&&
(c=a.c.idd(),h=(new b.aE)._0aE(),h.e(f+90,j),a.c.sidd(h),a.aW((new b.e)._01e(j.x,j.y),!1,null),a.c.sidd(c));return!0},o:function(a,g,c,m){var e=a.I,h=a.F;if(e>=h)return!1;var f=a.h,j=f.j;if(0==(j&64)&&!a.m_bDetecting){0>=f.C&&f.calculateStep(a.a,a.c,this.a.b,!0);var d=b.a.d(f.C),j=0==(j&1);if(0<d){var k=f.n,G=f.getFont(),o=a.w(512),s=f.getLabelsCore(),t=s.Se(),r=o?b.m.c():f.getTextColor()._nc(),n=f.c.a,o=n.o,p=a.a5(n,4),r=(new L.cE)._01cE(r._nc(),0,0),q=(this.a.b-this.a.c)/(h-e),D=a.c.idV(k.a(a.F),
G).c().h,B=0!=(a.r&8),E=null;B&&(E=f.buildGridUIObject(n));for(var C=0,v=0,n=e+d;n<=h;n+=d){var x=270,I=0,z=0,z=I=(n-e)*q+this.a.c;o&&m&&(B&&a.c.sida(E),a.c.idh(p,this.a.a.x-z,this.a.a.y-z,2*z,2*z));for(var y=0;y<=c;y++){var F=0,w=0,w=new b._p2(F,w);l.a(w,x,I,z,this.a.a.x,this.a.a.y);F=w.a;w=w.b;if(0!=y)if(o&&!m)B&&a.c.sida(E),a.c.idq(p,C,v,F,w);else break;else j&&(C=null,0!=t?(C=l.f((n-e)/f.T+0.1),C=s.id_(C)):C=k.a(n),C=a.a3(f,C),B&&a.c.sida(f),r.l(a.c,G,C,(new b.e)._01e(F+4,w-b.u.z(D,2)))),a.c.idq(p,
F-2,w,F+2,w);x+=g;C=F;v=w}}r._d();p._d()}}return!0},d:function(a,g){return this.n(new b._p2(0,0),a,g)},n:function(a,g,c){g=g*b.a.c/180;a.a=b.a.q(g);a.b=b.a.h(g);c+=this.a.c;g=this.a.a.x+c*a.b;a=this.a.a.y+c*a.a;return(new b.f)._01f(g,a)},h:function(a,b){this.c=b?this.c|a:this.c&~a},m:function(a){a.a.e=8;return null}};K.p=function(a,g,c,m,e,h,f,j,d,k){var l=0,o=0;270==d||90==d?l=1:90<=d&&270>=d&&(l=2);o=180<=d?2:0;d=null;d=0!=m?c.id_(k):0!=(a.t&2)?a.j.n.a(360*k/g)+"\u00b0":a.j.n.a(0>=a.j.C?k+1:k*b.a.d(a.j.C));
d=a.a3(a.j,d);g=(new L.cE)._01cE(h._nc(),l,o);g.l(a.c,e,d,(new b.e)._01e(f,j));g._d()};K._dt("CWGR",b.Sy,0,L.icT)})();
