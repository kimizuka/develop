//
//  ContentView.swift
//  webview
//
//  Created by Fumitaka KIMIZUKA on 2022/10/26.
//

import SwiftUI
import AVFoundation

var urlString = "https://google.co.jp"

struct ContentView: View {
    var body: some View {
        WebView(urlString: urlString).onAppear {
            print("appear")
        }.onDisappear {
            print("disapper")
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}

func ledFlash(_ flg: Bool) {
    guard let avDevice = AVCaptureDevice.default(for: .video) else { return }
    if avDevice.hasTorch {
        do {
            try avDevice.lockForConfiguration()
            avDevice.torchMode = flg ? .on : .off
            avDevice.unlockForConfiguration()
        } catch {
            print("Torch could not be used")
        }
    }
}
