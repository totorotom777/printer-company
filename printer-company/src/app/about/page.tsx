import Link from 'next/link';
import { ArrowRight, Building2, Users, Award, Target, Globe, Lightbulb } from 'lucide-react';

export default function About() {
  const milestones = [
    { year: '1974', event: '株式会社PrintTech設立' },
    { year: '1982', event: '初のインクジェットプリンター発売' },
    { year: '1995', event: 'レーザープリンター事業参入' },
    { year: '2005', event: '複合機（MFP）事業開始' },
    { year: '2015', event: 'AI技術搭載機器の開発開始' },
    { year: '2020', event: 'グローバル販売2,000万台突破' },
    { year: '2024', event: '次世代環境配慮型製品ライン発表' },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: '革新',
      description: '常に最新技術を追求し、お客様に価値ある製品を提供します'
    },
    {
      icon: Users,
      title: '顧客第一',
      description: 'お客様の声に耳を傾け、真のニーズに応える製品づくりを行います'
    },
    {
      icon: Globe,
      title: '持続可能性',
      description: '環境に配慮した製品開発と事業活動を通じて社会に貢献します'
    },
    {
      icon: Award,
      title: '品質',
      description: '妥協のない品質管理で、信頼性の高い製品をお届けします'
    }
  ];

  const stats = [
    { value: '50年+', label: '創業からの歴史' },
    { value: '2,000万台+', label: '世界累計販売台数' },
    { value: '85カ国', label: '販売国・地域' },
    { value: '1,200名', label: '従業員数' },
  ];

  const leadership = [
    {
      name: '田中 太郎',
      position: '代表取締役社長',
      bio: '東京大学工学部卒業後、大手電機メーカーを経て2010年PrintTech入社。2020年より現職。'
    },
    {
      name: '佐藤 花子',
      position: '取締役CTO',
      bio: 'MIT修士課程修了。シリコンバレーでの勤務を経て2015年PrintTech入社。技術開発を統括。'
    },
    {
      name: '鈴木 次郎',
      position: '取締役営業本部長',
      bio: '早稲田大学商学部卒業。印刷業界30年のベテラン。グローバル営業戦略を牽引。'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              会社情報
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              1974年の創業以来、印刷技術の革新を通じて
              世界中のお客様のビジネスと生活を支えています。
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-6">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">企業理念</h2>
              <p className="text-lg text-gray-600 mb-6">
                「技術革新を通じて、世界中の人々の創造性と生産性を向上させる」
              </p>
              <p className="text-gray-600">
                私たちは、印刷技術の可能性を追求し続け、お客様の想像力を形にするお手伝いをします。
                高品質な製品とサービスを通じて、ビジネスの成功と豊かな生活の実現に貢献することが私たちの使命です。
              </p>
            </div>
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-6">
                <Building2 className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">ビジョン</h2>
              <p className="text-lg text-gray-600 mb-6">
                「2030年までに、世界で最も信頼される印刷ソリューション企業になる」
              </p>
              <p className="text-gray-600">
                AI・IoT技術を活用した次世代印刷機器の開発、持続可能な事業運営、
                そしてグローバルなサービスネットワークの拡充を通じて、
                業界のリーディングカンパニーとしての地位を確立します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">私たちの価値観</h2>
            <p className="text-xl text-gray-600">
              PrintTechの事業活動の基盤となる4つの価値観
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <value.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">沿革</h2>
            <p className="text-xl text-gray-600">
              創業から現在まで、技術革新の歴史
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-blue-200"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <div className="text-gray-900">{milestone.event}</div>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center w-4 h-4">
                    <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">経営陣</h2>
            <p className="text-xl text-gray-600">
              PrintTechを牽引するリーダーシップチーム
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <Users className="h-16 w-16 text-gray-400" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{leader.name}</h3>
                  <div className="text-blue-600 font-medium mb-3">{leader.position}</div>
                  <p className="text-gray-600 text-sm">{leader.bio}</p>
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
            私たちと一緒に働きませんか？
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            PrintTechでは、印刷技術の未来を創造する仲間を募集しています。
            あなたの才能を活かし、世界中のお客様に価値を届ける仕事に挑戦しませんか。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/careers" 
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              採用情報を見る
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}