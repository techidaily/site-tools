---
title: Pingora
date: 2024-08-11T10:32:56.897Z
tags: 
  - nginx
categories: 
  - apps
description: Pingora is a Rust framework to build fast, reliable and programmable networked systems.
keywords: rust framework, network systems
thumbnail: https://raw.githubusercontent.com/cloudflare/pingora/main/docs/assets/pingora_banner.png
---

![Pingora banner image](https://raw.githubusercontent.com/cloudflare/pingora/main/docs/assets/pingora_banner.png)

## What is Pingora

Pingora is a Rust framework to [build fast, reliable and programmable networked systems](https://blog.cloudflare.com/pingora-open-source).

Pingora is battle tested as it has been serving more than 40 million Internet requests per second for [more than a few years](https://blog.cloudflare.com/how-we-built-pingora-the-proxy-that-connects-cloudflare-to-the-internet).

[https://github.com/cloudflare/pingora](https://github.com/cloudflare/pingora)

## Feature highlights

* Async Rust: fast and reliable
* HTTP 1/2 end to end proxy
* TLS over OpenSSL or BoringSSL
* gRPC and websocket proxying
* Graceful reload
* Customizable load balancing and failover strategies
* Support for a variety of observability tools

## Reasons to use Pingora

* **Security** is your top priority: Pingora is a more memory safe alternative for services that are written in C/C++.
* Your service is **performance-sensitive**: Pingora is fast and efficient.
* Your service requires extensive **customization**: The APIs Pingora proxy framework provides are highly programmable.

# Getting started

See our [quick starting guide](https://github.com/cloudflare/pingora/blob/main/docs/quick_start.md) to see how easy it is to build a load balancer.

Our [user guide](https://github.com/cloudflare/pingora/blob/main/docs/user_guide/index.md) covers more topics such as how to configure and run Pingora servers, as well as how to build custom HTTP server and proxy logic on top of Pingora's framework.

API docs are also available for all the crates.

# Notable crates in this workspace

* Pingora: the "public facing" crate to build to build networked systems and proxies.
* Pingora-core: this crates defined the protocols, functionalities and basic traits.
* Pingora-proxy: the logic and APIs to build HTTP proxies.
* Pingora-error: the common error type used across Pingora crates
* Pingora-http: the HTTP header definitions and APIs
* Pingora-openssl & pingora-boringssl: SSL related extensions and APIs
* Pingora-ketama: the [Ketama](https://github.com/RJ/ketama) consistent algorithm
* Pingora-limits: efficient counting algorithms
* Pingora-load-balancing: load balancing algorithm extensions for pingora proxy
* Pingora-memory-cache: Async in-memory caching with cache lock to prevent cache stampede.
* Pingora-timeout: A more efficient async timer system.
* TinyUfo: The caching algorithm behind pingora-memory-cache.

# System requirements

## Systems

Linux is our tier 1 environment and main focus.

We will try our best for most code to compile for Unix environments. This is for developers and users to have an easier time developing with Pingora in Unix-like environments like macOS (though some features might be missing)

Both x86_64 and aarch64 architectures will be supported.

## Rust version

Pingora keeps a rolling MSRV (minimum supported Rust version) policy of 6 months. This means we will accept PRs that upgrade the MSRV as long as the new Rust version used is at least 6 months old.

Our current MSRV is 1.72.



<ins class="adsbygoogle"
    style="display:block"
    data-ad-format="autorelaxed"
    data-ad-client="ca-pub-7571918770474297"
    data-ad-slot="1223367746"></ins>





<span class="atpl-alsoreadstyle">Also read:</span>
<div><ul>
<li><a href="https://tools.techidaily.com/aiseesoft-android-data-recovery-for-mac/"><u>Aiseesoft FoneLab Android Data Recovery for Mac</u></a></li>
<li><a href="https://tools.techidaily.com/aiseesoft-android-data-recovery-for-win/"><u>Aiseesoft FoneLab Android Data Recovery for Windows</u></a></li>
<li><a href="https://tools.techidaily.com/aiseesoft-iphone-data-recovery/"><u>Aiseesoft FoneLab iPhone Data Recovery</u></a></li>
<li><a href="https://tools.techidaily.com/aiseesoft-iphone-data-recovery-for-mac/"><u>Aiseesoft FoneLab iPhone Data Recovery for Mac</u></a></li>
<li><a href="https://tools.techidaily.com/aiseesoft-iphone-data-recovery-for-win/"><u>Aiseesoft FoneLab iPhone Data Recovery for Windows</u></a></li>
<li><a href="https://tools.techidaily.com/aiseesoft-total-video-converter-for-mac/"><u>Aiseesoft Total Video Converter for Mac</u></a></li>
<li><a href="https://tools.techidaily.com/aiseesoft-total-video-converter/"><u>Aiseesoft Video Converter</u></a></li>
<li><a href="https://tools.techidaily.com/wondershare/drfone/android-transfer/"><u>Android Phone Manager/Transfer Tool</u></a></li>
<li><a href="https://tools.techidaily.com/link-assistant/keyword-research/competitor-tool/"><u>Competitor keyword checker</u></a></li>
<li><a href="https://tools.techidaily.com/copernic/download/"><u>Discover the best Windows desktop search solution</u></a></li>
<li><a href="https://tools.techidaily.com/drivereasy/download/"><u>Driver Easy - Update your drivers in Windows 11,10 and 7.</u></a></li>
<li><a href="https://tools.techidaily.com/wondershare/dvd-slideshow-builder-deluxe/download/"><u>DVD Slideshow Builder Deluxe</u></a></li>
<li><a href="https://tools.techidaily.com/link-assistant/keyword-research/keyword-difficulty-tool/"><u>Free Keyword Difficulty checker tool</u></a></li>
<li><a href="https://tools.techidaily.com/wondershare/drfone/whatsapp-transfer/"><u>iOS & Android WhatsApp Transfer </u></a></li>
<li><a href="https://tools.techidaily.com/ios-unlock-dr-fone-wondershare/"><u>iOS Unlock - Dr.Fone - Wondershare</u></a></li>
<li><a href="https://tools.techidaily.com/stellardata-recovery/data-recovery-ios/"><u>iPhone Data Recovery Software</u></a></li>
<li><a href="https://tools.techidaily.com/link-assistant/keyword-research/keyword-gap/"><u>Keyword Gap Analysis Tool</u></a></li>
<li><a href="https://tools.techidaily.com/link-assistant/keyword-research/keyword-grouper/"><u>Keyword Grouping Tool</u></a></li>
<li><a href="https://tools.techidaily.com/link-assistant/keyword-research/long-tail-keyword-research-tool/"><u>Long Tail Keyword Research Tool</u></a></li>
<li><a href="https://tools.techidaily.com/mondly/download/"><u>Mondly - Learn Languages Online for Free</u></a></li>
<li><a href="https://tools.techidaily.com/nanocad/"><u>nanoCAD Engineering Ecosystem</u></a></li>
<li><a href="https://tools.techidaily.com/link-assistant-rank-tracker-local-rankings/"><u>SEO PowerSuite - Local Rank Tracker Tool</u></a></li>
<li><a href="https://tools.techidaily.com/link-assistant-website-auditor/"><u>SEO PowerSuite - WebSite Auditor</u></a></li>
<li><a href="https://tools.techidaily.com/stellardata-recovery/buy-now/"><u>Stellar All Products - Buy Now</u></a></li>
<li><a href="https://tools.techidaily.com/stellar-photo-recovery-for-mac/"><u>Stellar Photo Recovery for macOS</u></a></li>
<li><a href="https://tools.techidaily.com/stellardata-recovery/repaire-for-excel/"><u>Stellar Repair for Excel</u></a></li>
<li><a href="https://tools.techidaily.com/stellardata-recovery/repair-for-pdf/"><u>Stellar Repair for PDF</u></a></li>
<li><a href="https://tools.techidaily.com/stellar-video-repair/"><u>Stellar Video Repair</u></a></li>
<li><a href="https://tools.techidaily.com/stellar-video-repair-for-mac/"><u>Stellar Video Repair for macOS</u></a></li>
<li><a href="https://tools.techidaily.com/hello-world/"><u>TechiDaily Tools Site</u></a></li>
<li><a href="https://tools.techidaily.com/stellardata-recovery/file-repair-toolkit/"><u>Toolkit for File Repair</u></a></li>
<li><a href="https://tools.techidaily.com/advancedinstaller/"><u>Windows Installer Packaging Tool for Developers, ISVs & Enterprises - Advanced Installer</u></a></li>
<li><a href="https://tools.techidaily.com/wondershare-dr-fone-unlock-android-screen-for-win/"><u>Wondershare Dr.Fone Android Screen Unlock for Windows</u></a></li>
<li><a href="https://tools.techidaily.com/link-assistant/keyword-research/youtube-keyword-tool/"><u>YouTube Keyword Tool</u></a></li>
</ul></div>
