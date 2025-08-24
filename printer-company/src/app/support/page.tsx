import Link from 'next/link';
import { Download, Book, HelpCircle, Settings, Phone, Search, FileText, Video } from 'lucide-react';

export default function Support() {
  const supportCategories = [
    {
      icon: Download,
      title: 'ドライバ・ソフトウェア',
      description: '最新のドライバやユーティリティソフトウェアをダウンロード',
      items: [
        'Windows用ドライバ',
        'Mac用ドライバ',
        'プリンタユーティリティ',
        'スキャナソフトウェア'
      ]
    },
    {
      icon: Book,
      title: 'マニュアル・取扱説明書',
      description: '製品の設定方法や操作手順を詳しく解説',
      items: [
        'ユーザーマニュアル',
        'セットアップガイド',
        'メンテナンスガイド',
        'トラブルシューティング'
      ]
    },
    {
      icon: Video,
      title: '動画サポート',
      description: '製品の使い方を動画で分かりやすく説明',
      items: [
        '初期設定方法',
        '用紙交換手順',
        'インク・トナー交換',
        'メンテナンス方法'
      ]
    },
    {
      icon: HelpCircle,
      title: 'よくある質問',
      description: 'お客様からよくいただく質問と回答',
      items: [
        '印刷できない',
        '印刷品質の問題',
        'ネットワーク接続',
        'エラーメッセージ'
      ]
    }
  ];

  const quickLinks = [
    {
      title: '製品登録',
      description: '製品登録で延長保証やサポートを受けられます',
      href: '/support/register'
    },
    {
      title: '修理・保守サービス',
      description: '故障時の修理や定期メンテナンスサービス',
      href: '/support/repair'
    },
    {
      title: 'サプライ品購入',
      description: '純正インク・トナーカートリッジの購入',
      href: '/support/supplies'
    },
    {
      title: '技術サポート',
      description: '専門スタッフによる技術的なサポート',
      href: '/support/technical'
    }
  ];

  const faqItems = [
    {
      question: 'プリンターが印刷しません',
      answer: '電源、ケーブル接続、用紙セット、インク・トナー残量を確認してください。エラーランプが点灯している場合は、マニュアルでエラーコードを確認してください。'
    },
    {
      question: '印刷品質が悪い（かすれ、汚れ）',
      answer: 'ヘッドクリーニング機能を実行してください。それでも改善されない場合は、インク・トナーカートリッジの交換が必要です。'
    },
    {
      question: 'Wi-Fi接続ができません',
      answer: 'ネットワーク設定を確認し、SSIDとパスワードが正しいか確認してください。ルーターの再起動も試してみてください。'
    },
    {
      question: '用紙が詰まりました',
      answer: '電源を切り、詰まった用紙を無理に引っ張らず、ゆっくりと取り除いてください。用紙の破片が残っていないか確認してください。'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              サポートセンター
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              製品の設定方法、トラブル解決、メンテナンスなど、
              お客様をトータルサポートいたします。
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="製品名やキーワードで検索..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">よく使われるサポート</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Link key={index} href={link.href}>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{link.title}</h3>
                  <p className="text-gray-600 text-sm">{link.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">サポートカテゴリ</h2>
            <p className="text-xl text-gray-600">
              目的に応じたサポート情報をご利用ください
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                      <category.icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                          <FileText className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4">
                      <Link 
                        href={`/support/${category.title.toLowerCase()}`}
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                      >
                        詳細を見る →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">よくある質問</h2>
            <p className="text-xl text-gray-600">
              お客様からよくいただく質問をまとめました
            </p>
          </div>

          <div className="space-y-6">
            {faqItems.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-sm">Q</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 font-semibold text-sm">A</span>
                      </div>
                      <p className="text-gray-600 flex-1">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link 
              href="/support/faq" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              すべてのFAQを見る →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <Phone className="h-16 w-16 text-blue-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                お困りの際はお気軽にお電話ください
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                専門スタッフが電話でサポートいたします。
                製品の設定や操作方法、トラブル解決まで、丁寧にご案内いたします。
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-8">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">一般サポート</h3>
                  <p className="text-2xl font-bold text-blue-600 mb-1">03-1234-5678</p>
                  <p className="text-sm text-gray-600">平日 9:00-18:00</p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">技術サポート</h3>
                  <p className="text-2xl font-bold text-blue-600 mb-1">03-1234-5679</p>
                  <p className="text-sm text-gray-600">平日 9:00-20:00</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  メールでお問い合わせ
                </Link>
                <Link 
                  href="/support/remote" 
                  className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
                >
                  リモートサポート
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}