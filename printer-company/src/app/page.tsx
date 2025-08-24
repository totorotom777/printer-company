import Link from 'next/link';
import { ArrowRight, Printer, Zap, Shield, Wrench, Star, TrendingUp } from 'lucide-react';

export default function Home() {
  const stats = [
    { value: '50年+', label: '業界経験' },
    { value: '2,000万台+', label: '累計販売実績' },
    { value: '99.8%', label: '稼働率' },
    { value: '24時間', label: 'サポート体制' },
  ];

  const products = [
    {
      category: 'インクジェットプリンター',
      description: '家庭・小規模オフィス向け高画質プリンター',
      features: ['高画質印刷', 'コンパクト設計', 'Wi-Fi対応'],
      image: '/api/placeholder/300/200'
    },
    {
      category: 'レーザープリンター',
      description: 'オフィス向け高速・高品質印刷機',
      features: ['高速印刷', '大容量給紙', 'セキュリティ機能'],
      image: '/api/placeholder/300/200'
    },
    {
      category: '複合機（MFP）',
      description: '印刷・スキャン・FAX機能を統合したオールインワン',
      features: ['多機能統合', 'タッチパネル', 'クラウド連携'],
      image: '/api/placeholder/300/200'
    }
  ];

  const news = [
    {
      date: '2024.03.15',
      title: '新型高速レーザープリンター「PT-4500シリーズ」を発売',
      category: '製品情報'
    },
    {
      date: '2024.02.28',
      title: 'AI搭載の次世代複合機開発に向けた技術提携を発表',
      category: '企業情報'
    },
    {
      date: '2024.02.10',
      title: '環境配慮型トナーカートリッジの新リサイクルプログラム開始',
      category: 'サステナビリティ'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                未来を印刷する
                <span className="block text-blue-200">革新技術</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                50年以上の経験と技術力で、高品質なプリンター・複合機を提供。
                お客様のビジネスの成功をサポートします。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/products" 
                  className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  製品を見る
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  お問い合わせ
                </Link>
              </div>
            </div>
            <div className="lg:text-right">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6">実績データ</h3>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-blue-200">{stat.value}</div>
                      <div className="text-sm text-blue-100">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              PrintTechが選ばれる理由
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              革新的な技術と信頼性の高いサポートで、お客様のビジネスを支えます
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: '高速印刷',
                description: '業界最高水準の印刷速度で生産性向上をサポート'
              },
              {
                icon: Shield,
                title: '高いセキュリティ',
                description: '企業機密を守る多層セキュリティ機能を標準装備'
              },
              {
                icon: Wrench,
                title: '充実のサポート',
                description: '24時間365日の技術サポートと保守サービス'
              },
              {
                icon: TrendingUp,
                title: 'コスト効率',
                description: 'ランニングコストを抑える省エネ設計と長寿命'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
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

      {/* Products Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              主力製品ラインナップ
            </h2>
            <p className="text-xl text-gray-600">
              用途に応じた最適なソリューションを提供
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <Printer className="h-16 w-16 text-gray-400" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.category}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <ul className="space-y-1 mb-4">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <Star className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/products" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    詳細を見る
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">最新ニュース</h2>
            <Link 
              href="/about/news" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              すべて見る →
            </Link>
          </div>

          <div className="space-y-4">
            {news.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm text-gray-500">{item.date}</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">{item.category}</span>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 hover:text-blue-600 cursor-pointer">
                      {item.title}
                    </h3>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 mt-2 sm:mt-0 sm:ml-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            お客様のビジネスに最適なソリューションを
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            専門スタッフがお客様の課題をヒアリングし、最適な製品・サービスをご提案します。
            まずはお気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              お問い合わせ
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/support" 
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              サポートセンター
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
