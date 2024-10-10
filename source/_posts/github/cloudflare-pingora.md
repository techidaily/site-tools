---
title: Pingora
date: 2024-10-09T21:45:00.622Z
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
<li><a href="https://tools.techidaily.com/smart-seo-tool/products/"><u>Smart-seo-tool's Products</u></a></li>
<li><a href="https://tools.techidaily.com/snapfashunedu/products/"><u>Snapfashunedu's Products</u></a></li>
<li><a href="https://tools.techidaily.com/social-gator/products/"><u>Social-gator's Products</u></a></li>
<li><a href="https://tools.techidaily.com/softwarezirkel/products/"><u>Softwarezirkel's Products</u></a></li>
<li><a href="https://tools.techidaily.com/starthotspot/products/"><u>Starthotspot's Products</u></a></li>
<li><a href="https://tools.techidaily.com/stellarinfo/buy-now/"><u>Stellar All Products - Buy Now</u></a></li>
</ul></div>

