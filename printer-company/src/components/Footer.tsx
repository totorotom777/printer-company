import Link from 'next/link';
import { Printer, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Printer className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">PrintTech</span>
            </div>
            <p className="text-gray-400 mb-4">
              高品質なプリンター・複合機を提供する業界のリーディングカンパニーです。
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-gray-400">03-1234-5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-gray-400">info@printtech.jp</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-gray-400">東京都港区芝公園1-2-3</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">製品情報</h3>
            <ul className="space-y-2">
              <li><Link href="/products/printers" className="text-gray-400 hover:text-white transition-colors">プリンター</Link></li>
              <li><Link href="/products/mfp" className="text-gray-400 hover:text-white transition-colors">複合機（MFP）</Link></li>
              <li><Link href="/products/supplies" className="text-gray-400 hover:text-white transition-colors">サプライ品</Link></li>
              <li><Link href="/products/software" className="text-gray-400 hover:text-white transition-colors">ソフトウェア</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">サポート</h3>
            <ul className="space-y-2">
              <li><Link href="/support/download" className="text-gray-400 hover:text-white transition-colors">ドライバ・ダウンロード</Link></li>
              <li><Link href="/support/manual" className="text-gray-400 hover:text-white transition-colors">マニュアル</Link></li>
              <li><Link href="/support/faq" className="text-gray-400 hover:text-white transition-colors">よくある質問</Link></li>
              <li><Link href="/support/service" className="text-gray-400 hover:text-white transition-colors">保守サービス</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">会社情報</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">会社概要</Link></li>
              <li><Link href="/about/history" className="text-gray-400 hover:text-white transition-colors">沿革</Link></li>
              <li><Link href="/about/vision" className="text-gray-400 hover:text-white transition-colors">企業理念</Link></li>
              <li><Link href="/about/news" className="text-gray-400 hover:text-white transition-colors">ニュース</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2024 PrintTech Corporation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}