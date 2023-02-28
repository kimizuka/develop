//
//  WebView.swift
//  webview
//
//  Created by Fumitaka KIMIZUKA on 2022/10/27.
//

import SwiftUI
import WebKit

struct WebView: UIViewRepresentable {
    var urlString: String
    
    func makeUIView(context: Context) -> WKWebView {
        let config = WKWebViewConfiguration()

        config.allowsInlineMediaPlayback = true

        return WKWebView(frame: .zero, configuration: config)
    }
    
    func updateUIView(_ uiView: WKWebView, context: Context) {
        guard let url = URL(string: urlString) else {
            return
        }

        uiView.load(URLRequest(url: url))
    }
}
