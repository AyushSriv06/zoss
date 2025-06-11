import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Droplets, Zap, Wrench, Star, Shield, Award, Sparkles } from "lucide-react";

const B2CSolutions = () => {
  const products = [
    {
      name: "Sydney",
      image: "/lovable-uploads/622f2f9b-d2f1-4f0c-ac4f-656dca514723.png",
      features: ["pH Range: 8.5-11.0", "Compact Design", "Easy Installation"],
      price: "₹2,22,000",
      badge: "Most Popular"
    },
    {
      name: "Atlanta", 
      image: "/lovable-uploads/e2461f2f-96be-4a69-ad60-df4433dd50ce.png",
      features: ["pH Range: 8.0-11.5", "Hidden Installation", "High Flow Rate"],
      price: "₹1,59,000",
      badge: "Best Value"
    },
    {
      name: "Vienna",
      image: "/lovable-uploads/91d71d34-d5aa-44bb-8185-e5698d380783.png", 
      features: ["Premium Quality", "Advanced Ionization", "Professional Grade"],
      price: "₹80,000",
      badge: "Premium"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50/30 to-blue-50/20">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse delay-700"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <Sparkles className="w-5 h-5 mr-2 text-cyan-300" />
            <span className="text-cyan-100 font-medium tracking-wide">Premium Water Solutions</span>
          </div>
          
          <h1 className="font-heading text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent leading-tight">
            Zoss at Home
          </h1>
          <p className="text-2xl md:text-3xl max-w-5xl mx-auto text-blue-100/90 leading-relaxed font-light mb-12">
            Transform your home hydration with our premium alkaline ionizer solutions
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-blue-200/80">
            <div className="flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              <span className="font-medium">Certified Quality</span>
            </div>
            <div className="flex items-center">
              <Award className="w-5 h-5 mr-2" />
              <span className="font-medium">Award Winning</span>
            </div>
            <div className="flex items-center">
              <Sparkles className="w-5 h-5 mr-2" />
              <span className="font-medium">Premium Technology</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <Badge variant="outline" className="px-6 py-2 text-lg font-medium border-blue-200 text-blue-700 bg-blue-50/50">
                Premium Collection
              </Badge>
            </div>
            <h2 className="font-heading text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Water Ionizer Collection
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
              Experience the pinnacle of water purification technology designed for the modern home
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {products.map((product, index) => (
              <Card key={index} className="group hover:shadow-3xl transition-all duration-700 overflow-hidden border-0 bg-white/90 backdrop-blur-sm shadow-2xl hover:scale-[1.02] relative">
                {/* Premium Badge */}
                <div className="absolute top-6 right-6 z-20">
                  <Badge className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 font-semibold shadow-lg">
                    {product.badge}
                  </Badge>
                </div>
                
                <div className="w-full h-80 bg-gradient-to-br from-slate-50 to-blue-50/30 flex items-center justify-center p-10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-100/10 to-blue-200/20 group-hover:to-blue-300/30 transition-all duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="max-h-full max-w-full object-contain transform group-hover:scale-110 transition-transform duration-700 relative z-10 drop-shadow-2xl"
                  />
                </div>
                
                <CardHeader className="pb-6 pt-8">
                  <CardTitle className="text-3xl text-slate-900 font-bold mb-4">{product.name}</CardTitle>
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    {product.price}
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-4 mb-10">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="text-slate-600 flex items-center text-lg font-medium">
                        <span className="w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-4 flex-shrink-0 shadow-lg"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 hover:from-blue-700 hover:via-blue-800 hover:to-cyan-700 text-white py-6 text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02] rounded-xl">
                    Order Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 bg-gradient-to-br from-white to-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-heading text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              Simple, elegant, and powerful technology at your fingertips
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { icon: <Wrench className="h-12 w-12" />, title: "Connect to Tap", description: "Seamless integration with your existing water system" },
              { icon: <Zap className="h-12 w-12" />, title: "Turn on Electrolysis", description: "Advanced ionization technology activates instantly" },
              { icon: <Star className="h-12 w-12" />, title: "Select pH Level", description: "Customize your water's alkalinity to perfection" },
              { icon: <Droplets className="h-12 w-12" />, title: "Enjoy Ionized Water", description: "Pure, healthy, life-enhancing water every time" }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl flex items-center justify-center mx-auto text-blue-600 group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3">
                    {step.icon}
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {index + 1}
                  </div>
                </div>
                <h3 className="font-bold text-slate-900 mb-4 text-2xl">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg font-light">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-gradient-to-br from-blue-50/30 via-white to-cyan-50/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill-opacity='0.02'%3E%3Cpath d='M50 50m-40 0a40 40 0 1 1 80 0a40 40 0 1 1 -80 0' fill='%23000'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-heading text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Why Choose Zoss?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              Uncompromising quality meets innovative technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center p-12 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 border border-white/50 group hover:scale-[1.02]">
              <div className="w-32 h-32 mx-auto mb-10 rounded-3xl bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl">
                <img 
                  src="/lovable-uploads/e0fc6371-a120-4061-bfd3-2b221d37135c.png" 
                  alt="Purity Assured"
                  className="w-24 h-24 object-cover rounded-2xl"
                />
              </div>
              <h3 className="font-heading text-3xl font-bold text-slate-900 mb-6">Purity Assured</h3>
              <p className="text-slate-600 leading-relaxed text-lg font-light">Advanced multi-stage filtration technology ensures the highest quality alkaline water for your family's health and wellbeing.</p>
            </div>
            
            <div className="text-center p-12 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 border border-white/50 group hover:scale-[1.02]">
              <div className="w-32 h-32 mx-auto mb-10 rounded-3xl bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl">
                <img 
                  src="/lovable-uploads/775ee836-c62f-4b14-9303-6dda3ffa7328.png" 
                  alt="Ayurvedic Balance"
                  className="w-24 h-24 object-cover rounded-2xl"
                />
              </div>
              <h3 className="font-heading text-3xl font-bold text-slate-900 mb-6">Ayurvedic Wisdom</h3>
              <p className="text-slate-600 leading-relaxed text-lg font-light">Inspired by ancient Ayurvedic principles, our systems create perfectly balanced alkaline water for optimal health and vitality.</p>
            </div>
            
            <div className="text-center p-12 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 border border-white/50 group hover:scale-[1.02]">
              <div className="w-32 h-32 mx-auto mb-10 rounded-3xl bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl">
                <Droplets className="w-24 h-24 text-blue-600" />
              </div>
              <h3 className="font-heading text-3xl font-bold text-slate-900 mb-6">Antioxidant Rich</h3>
              <p className="text-slate-600 leading-relaxed text-lg font-light">Rich in powerful antioxidants and essential minerals, our ionized water supports your body's natural detoxification processes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-20 w-24 h-24 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-gradient-to-br from-indigo-400/30 to-purple-400/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-10">
            <Sparkles className="w-6 h-6 mr-3 text-cyan-300" />
            <span className="text-cyan-100 font-semibold tracking-wide text-lg">Transform Your Home Today</span>
          </div>
          
          <h2 className="font-heading text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent leading-tight">
            Elevate Your Home Hydration
          </h2>
          <p className="text-2xl md:text-3xl mb-12 text-blue-100/90 leading-relaxed font-light max-w-4xl mx-auto">
            Join thousands of families who have transformed their health with Zoss Water premium solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-white to-blue-100 text-slate-900 hover:from-blue-50 hover:to-blue-200 px-12 py-6 text-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-xl">
              Browse All Products
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-12 py-6 text-xl font-semibold rounded-xl backdrop-blur-sm">
              Request Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default B2CSolutions;
