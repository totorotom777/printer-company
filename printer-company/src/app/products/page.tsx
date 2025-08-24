import Link from 'next/link';
import { ArrowRight, Printer, Monitor, Zap, Shield, Wifi, Gauge } from 'lucide-react';

export default function Products() {
  const productCategories = [
    {
      id: 'inkjet',
      title: 'インクジェットプリンター',
      description: '家庭・小規模オフィス向けの高画質カラープリンター。写真印刷に最適。',
      icon: Printer,
      products: [
        {
          model: 'PT-IJ2000',
          name: 'コンパクトインクジェット',
          price: '¥29,800',
          features: ['4色インク', 'Wi-Fi対応', 'スマホ印刷', 'A4対応'],
          specs: { speed: '10枚/分', resolution: '4800×1200dpi' }
        },
        {
          model: 'PT-IJ3500',
          name: 'ハイエンドインクジェット',
          price: '¥58,000',
          features: ['6色インク', 'タッチパネル', '両面印刷', 'A3対応'],
          specs: { speed: '15枚/分', resolution: '5760×1440dpi' }
        }
      ]
    },
    {
      id: 'laser',
      title: 'レーザープリンター',
      description: 'オフィス向けの高速・高品質印刷機。大量印刷に最適。',
      icon: Zap,
      products: [
        {
          model: 'PT-L4500',
          name: 'オフィスレーザー',
          price: '¥89,800',
          features: ['モノクロ高速', 'ネットワーク対応', '大容量給紙', 'セキュリティ'],
          specs: { speed: '45枚/分', resolution: '1200×1200dpi' }
        },
        {
          model: 'PT-LC7000',
          name: 'カラーレーザー',
          price: '¥198,000',
          features: ['カラー印刷', '両面印刷', 'タッチパネル', 'クラウド印刷'],
          specs: { speed: '35枚/分', resolution: '2400×600dpi' }
        }
      ]
    },
    {
      id: 'mfp',
      title: '複合機（MFP）',
      description: '印刷・スキャン・コピー・FAX機能を統合したオールインワン機。',
      icon: Monitor,
      products: [
        {
          model: 'PT-MFP5000',
          name: 'ビジネス複合機',
          price: '¥298,000',
          features: ['多機能統合', '高速スキャン', 'タッチパネル', 'セキュリティ'],
          specs: { speed: '50枚/分', resolution: '1200×1200dpi' }
        },
        {
          model: 'PT-MFP8000',
          name: 'ハイエンド複合機',
          price: '¥498,000',
          features: ['AI機能', 'クラウド連携', '大型タッチパネル', '高セキュリティ'],
          specs: { speed: '80枚/分', resolution: '2400×600dpi' }
        }
      ]
    }
  ];

  const features = [
    {
      icon: Zap,
      title: '高速印刷',
      description: '最大80枚/分の高速印刷で生産性を向上'
    },
    {
      icon: Shield,
      title: 'セキュリティ',
      description: '多層セキュリティで企業の機密情報を保護'
    },
    {
      icon: Wifi,
      title: 'ワイヤレス',
      description: 'Wi-Fi・Bluetooth対応でどこからでも印刷'
    },
    {
      icon: Gauge,
      title: '省エネ',
      description: 'エコモード搭載で電力コストを削減'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              製品ラインナップ
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              お客様のニーズに合わせた幅広い製品をご用意。
              家庭用から業務用まで、最適なソリューションをお選びいただけます。
            </p>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {productCategories.map((category, categoryIndex) => (
            <div key={category.id} className={`mb-20 ${categoryIndex !== productCategories.length - 1 ? 'border-b border-gray-200 pb-20' : ''}`}>
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-4">
                  <category.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.title}</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.products.map((product, productIndex) => (
                  <div key={productIndex} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <Printer className="h-16 w-16 text-gray-400" />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                          <p className="text-sm text-gray-500">{product.model}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-600">{product.price}</div>
                          <div className="text-sm text-gray-500">税込価格</div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-medium text-gray-900 mb-2">主な機能</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.features.map((feature, featureIndex) => (
                            <span key={featureIndex} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-medium text-gray-900 mb-2">仕様</h4>
                        <div className="text-sm text-gray-600 space-y-1">
                          <div>印刷速度: {product.specs.speed}</div>
                          <div>解像度: {product.specs.resolution}</div>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Link 
                          href="/contact" 
                          className="flex-1 bg-blue-600 text-white text-center py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                        >
                          お問い合わせ
                        </Link>
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                          詳細資料
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            製品選びでお悩みですか？
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            専門スタッフがお客様の用途・予算に合わせて最適な製品をご提案いたします。
            まずはお気軽にご相談ください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              製品相談・見積依頼
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/support" 
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              カタログダウンロード
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}