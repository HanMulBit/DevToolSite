const toolsData = {
  dev: {
    label: "개발 (Development)",
    color: "#6366f1",
    icon: "💻",
    categories: [
      {
        name: "IDE / 에디터",
        tools: [
          { name: "VS Code", url: "https://code.visualstudio.com", desc: "가장 널리 쓰이는 경량 코드 에디터. 플러그인 생태계가 풍부하고 모든 언어를 지원한다.", tags: ["Microsoft", "무료", "크로스플랫폼"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
          { name: "IntelliJ IDEA", url: "https://www.jetbrains.com/idea/", desc: "JVM 기반 언어(Java, Kotlin, Scala)에 최적화된 강력한 IDE. 스마트 리팩터링과 디버거가 뛰어나다.", tags: ["JetBrains", "유료/커뮤니티", "Java"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" },
          { name: "PyCharm", url: "https://www.jetbrains.com/pycharm/", desc: "Python 전용 IDE. 과학 도구(Jupyter, Pandas) 통합과 가상환경 관리가 편리하다.", tags: ["JetBrains", "유료/커뮤니티", "Python"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg" },
          { name: "WebStorm", url: "https://www.jetbrains.com/webstorm/", desc: "JetBrains JavaScript/TypeScript 전용 IDE. React·Vue·Node 개발에 최적화된 스마트 완성을 제공한다.", tags: ["JetBrains", "JavaScript", "유료"], logo: "" },
          { name: "GoLand", url: "https://www.jetbrains.com/go/", desc: "JetBrains Go 전용 IDE. 고루틴 디버깅·인터페이스 분석·모듈 관리를 한 곳에서 처리한다.", tags: ["JetBrains", "Go", "유료"], logo: "" },
          { name: "Rider", url: "https://www.jetbrains.com/rider/", desc: "JetBrains .NET IDE. C#·F#·Unity 개발에 최적화되어 있으며 Visual Studio 대안으로 주목받는다.", tags: ["JetBrains", ".NET", "C#"], logo: "" },
          { name: "Visual Studio", url: "https://visualstudio.microsoft.com", desc: "Microsoft 풀기능 IDE. C#·C++·.NET 개발의 표준이며 강력한 디버거와 프로파일러를 제공한다.", tags: ["Microsoft", "C#", ".NET"], logo: "" },
          { name: "Vim / Neovim", url: "https://neovim.io", desc: "터미널 기반 텍스트 에디터. 키보드 중심 워크플로우로 서버 환경에서도 강력하게 동작한다.", tags: ["오픈소스", "터미널", "고속"], logo: "" },
          { name: "Emacs", url: "https://www.gnu.org/software/emacs/", desc: "무한 확장 가능한 텍스트 편집기. Lisp으로 모든 동작을 커스터마이징하며 IDE 수준 기능도 구현할 수 있다.", tags: ["오픈소스", "터미널", "Lisp"], logo: "" },
          { name: "Sublime Text", url: "https://www.sublimetext.com", desc: "빠르고 가벼운 코드 에디터. 멀티 커서와 명령 팔레트로 VS Code 이전 세대 표준 에디터였다.", tags: ["유료", "경량", "크로스플랫폼"], logo: "" },
          { name: "Cursor", url: "https://cursor.sh", desc: "AI 코드 완성이 내장된 VS Code 포크. GPT-4 기반 자동완성·채팅으로 AI 페어 프로그래밍을 지원한다.", tags: ["AI", "VS Code 기반", "유료"], logo: "" },
          { name: "Xcode", url: "https://developer.apple.com/xcode/", desc: "Apple 공식 IDE. iOS/macOS 앱 개발과 Swift 언어를 위한 필수 도구다.", tags: ["Apple", "macOS", "Swift"], logo: "" },
          { name: "Android Studio", url: "https://developer.android.com/studio", desc: "Google 공식 Android 개발 IDE. Jetpack Compose 지원과 에뮬레이터가 내장되어 있다.", tags: ["Google", "Android", "Kotlin"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" },
          { name: "Eclipse", url: "https://www.eclipse.org", desc: "오랜 역사의 오픈소스 Java IDE. 플러그인 아키텍처로 다양한 언어·도구를 지원하며 엔터프라이즈에서 여전히 쓰인다.", tags: ["오픈소스", "Java", "플러그인"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg" },
        ]
      },
      {
        name: "버전 관리",
        tools: [
          { name: "Git", url: "https://git-scm.com", desc: "분산 버전 관리 시스템의 표준. 브랜치·머지·리베이스로 팀 협업 코드를 추적한다.", tags: ["오픈소스", "필수", "CLI"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
          { name: "GitHub", url: "https://github.com", desc: "Git 원격 저장소 호스팅 + PR·Issue·Actions 기반 협업 플랫폼.", tags: ["Microsoft", "클라우드", "협업"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
          { name: "GitLab", url: "https://gitlab.com", desc: "Self-hosted 가능한 DevSecOps 플랫폼. CI/CD 파이프라인이 내장되어 있다.", tags: ["오픈소스", "Self-hosted", "CI/CD"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
          { name: "Bitbucket", url: "https://bitbucket.org", desc: "Atlassian 생태계(Jira, Confluence)와 통합된 Git 호스팅 서비스.", tags: ["Atlassian", "Jira 연동", "클라우드"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg" },
          { name: "Sourcetree", url: "https://www.sourcetreeapp.com", desc: "Atlassian이 만든 무료 Git GUI 클라이언트. 브랜치 시각화와 인터랙티브 리베이스를 직관적으로 조작한다.", tags: ["Atlassian", "GUI", "무료"], logo: "" },
        ]
      },
      {
        name: "언어 & 런타임",
        tools: [
          { name: "Python", url: "https://www.python.org", desc: "범용 스크립팅·웹·AI 언어. 생산성이 높고 데이터 과학 라이브러리가 풍부하다.", tags: ["인터프리터", "범용", "AI/ML"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
          { name: "JavaScript", url: "https://developer.mozilla.org/docs/Web/JavaScript", desc: "브라우저의 유일한 네이티브 언어. Node.js로 서버까지 확장되며 풀스택 개발이 가능하다.", tags: ["웹", "브라우저", "Node.js"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
          { name: "TypeScript", url: "https://www.typescriptlang.org", desc: "JavaScript에 정적 타입을 추가한 언어. 대규모 코드베이스에서 버그를 컴파일 타임에 잡아낸다.", tags: ["Microsoft", "정적 타입", "JavaScript 슈퍼셋"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
          { name: "Node.js", url: "https://nodejs.org", desc: "Chrome V8 엔진 기반 JavaScript 런타임. 이벤트 루프로 비동기 I/O를 처리하며 서버·CLI 도구를 만든다.", tags: ["런타임", "비동기", "JavaScript"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
          { name: "Java", url: "https://www.java.com", desc: "엔터프라이즈 백엔드의 강자. JVM 생태계와 Spring Framework로 대규모 서비스를 구축한다.", tags: ["JVM", "엔터프라이즈", "OOP"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
          { name: "Kotlin", url: "https://kotlinlang.org", desc: "JVM 호환 현대 언어. Android 공식 언어이며 간결한 문법으로 Java를 대체한다.", tags: ["JVM", "Android", "Modern"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
          { name: "Go", url: "https://go.dev", desc: "Google이 만든 컴파일 언어. 동시성 처리와 빠른 빌드로 마이크로서비스·CLI 도구에 적합하다.", tags: ["Google", "고성능", "동시성"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
          { name: "Rust", url: "https://www.rust-lang.org", desc: "메모리 안전성을 컴파일 타임에 보장하는 시스템 언어. WebAssembly·임베디드·고성능 서버에 쓰인다.", tags: ["시스템", "메모리 안전", "고성능"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg" },
          { name: "C / C++", url: "https://isocpp.org", desc: "시스템 프로그래밍의 근간. OS·게임 엔진·임베디드·고성능 라이브러리 개발에 여전히 필수다.", tags: ["시스템", "고성능", "임베디드"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
          { name: "C#", url: "https://learn.microsoft.com/dotnet/csharp/", desc: "Microsoft .NET 플랫폼 주력 언어. 게임(Unity)·엔터프라이즈 앱·Azure 서버리스에 폭넓게 쓰인다.", tags: ["Microsoft", ".NET", "Unity"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
          { name: "Ruby", url: "https://www.ruby-lang.org", desc: "개발자 행복을 철학으로 만든 동적 언어. Rails 프레임워크로 스타트업 MVP를 빠르게 구축한다.", tags: ["동적", "Rails", "스타트업"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" },
          { name: "PHP", url: "https://www.php.net", desc: "웹 서버사이드 스크립팅의 원조. WordPress·Laravel 생태계로 전 세계 웹의 상당 부분을 구동한다.", tags: ["웹", "WordPress", "서버사이드"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
          { name: "Swift", url: "https://www.swift.org", desc: "Apple이 만든 iOS/macOS 개발 언어. Objective-C보다 안전하고 빠르며 SwiftUI와 함께 현대 Apple 앱을 만든다.", tags: ["Apple", "iOS", "macOS"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
          { name: "Dart / Flutter", url: "https://flutter.dev", desc: "Google이 만든 크로스플랫폼 UI 프레임워크. 하나의 코드베이스로 iOS·Android·웹·데스크톱 앱을 만든다.", tags: ["Google", "크로스플랫폼", "모바일"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
          { name: "Scala", url: "https://www.scala-lang.org", desc: "JVM 기반 함수형+객체지향 언어. Apache Spark의 기본 언어이며 대규모 데이터 처리·분산 시스템에 쓰인다.", tags: ["JVM", "함수형", "Spark"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg" },
          { name: "R", url: "https://www.r-project.org", desc: "통계 분석과 데이터 시각화에 특화된 언어. ggplot2·tidyverse 생태계로 학계·데이터 과학에서 널리 쓰인다.", tags: ["통계", "시각화", "데이터 과학"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" },
          { name: "Elixir", url: "https://elixir-lang.org", desc: "Erlang VM 위의 함수형 언어. 액터 모델 동시성과 99.9999% 가용성으로 실시간 분산 시스템을 구축한다.", tags: ["함수형", "동시성", "Erlang VM"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elixir/elixir-original.svg" },
          { name: "Lua", url: "https://www.lua.org", desc: "경량 임베디드 스크립팅 언어. Nginx·Redis·게임 엔진(Roblox, World of Warcraft)에 스크립팅 엔진으로 내장된다.", tags: ["임베디드", "경량", "게임"], logo: "" },
        ]
      },
      {
        name: "웹 프레임워크",
        tools: [
          { name: "React", url: "https://react.dev", desc: "Meta가 만든 컴포넌트 기반 UI 라이브러리. 생태계가 광대하며 SPA·SSR 모두 지원한다.", tags: ["Meta", "SPA", "컴포넌트"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          { name: "Next.js", url: "https://nextjs.org", desc: "React 기반 풀스택 프레임워크. SSR·SSG·App Router로 SEO와 성능을 동시에 확보한다.", tags: ["Vercel", "SSR", "풀스택"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
          { name: "Vue.js", url: "https://vuejs.org", desc: "진입 장벽이 낮은 프로그레시브 UI 프레임워크. Options API와 Composition API를 모두 지원한다.", tags: ["오픈소스", "프로그레시브", "SPA"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
          { name: "Nuxt.js", url: "https://nuxt.com", desc: "Vue 기반 풀스택 프레임워크. SSR·SSG·ISR을 지원하며 파일 기반 라우팅으로 생산성을 높인다.", tags: ["Vue", "SSR", "풀스택"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg" },
          { name: "Angular", url: "https://angular.dev", desc: "Google이 만든 엔터프라이즈급 프레임워크. 강력한 타입 시스템과 DI 컨테이너로 대규모 SPA를 구조화한다.", tags: ["Google", "TypeScript", "엔터프라이즈"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
          { name: "Svelte / SvelteKit", url: "https://svelte.dev", desc: "컴파일 타임에 가상 DOM 없이 최적화된 JS를 생성하는 프레임워크. 번들 크기가 작고 성능이 뛰어나다.", tags: ["컴파일", "경량", "고성능"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg" },
          { name: "Astro", url: "https://astro.build", desc: "콘텐츠 중심 웹사이트를 위한 프레임워크. Islands 아키텍처로 필요한 부분만 JS를 로드해 초고속 로딩을 실현한다.", tags: ["정적사이트", "Islands", "성능"], logo: "" },
          { name: "Remix", url: "https://remix.run", desc: "웹 표준 기반 React 풀스택 프레임워크. 중첩 라우트와 로더/액션 패턴으로 데이터 페칭을 간결하게 처리한다.", tags: ["React", "풀스택", "웹 표준"], logo: "" },
          { name: "Express.js", url: "https://expressjs.com", desc: "Node.js 최소주의 웹 프레임워크. 미들웨어 체인으로 REST API·웹 서버를 빠르게 구성하는 사실상 표준이다.", tags: ["Node.js", "미니멀", "REST API"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
          { name: "NestJS", url: "https://nestjs.com", desc: "Angular에서 영감받은 Node.js 프레임워크. DI·데코레이터·모듈 구조로 엔터프라이즈 백엔드를 체계적으로 구성한다.", tags: ["Node.js", "TypeScript", "DI"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
          { name: "FastAPI", url: "https://fastapi.tiangolo.com", desc: "Python 비동기 웹 프레임워크. 타입 힌트 기반 자동 OpenAPI 문서 생성이 강점이다.", tags: ["Python", "비동기", "REST API"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
          { name: "Flask", url: "https://flask.palletsprojects.com", desc: "Python 마이크로 웹 프레임워크. 최소한의 구조로 빠른 프로토타이핑과 소규모 API 서버에 적합하다.", tags: ["Python", "마이크로", "경량"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
          { name: "Spring Boot", url: "https://spring.io/projects/spring-boot", desc: "Java 엔터프라이즈 표준 프레임워크. 자동 설정과 방대한 생태계로 백엔드 API·배치를 구축한다.", tags: ["Java", "엔터프라이즈", "REST"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
          { name: "Django", url: "https://www.djangoproject.com", desc: "Python '배터리 포함' 웹 프레임워크. ORM·관리자 패널·인증이 내장되어 빠른 개발이 가능하다.", tags: ["Python", "풀스택", "ORM"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
          { name: "Ruby on Rails", url: "https://rubyonrails.org", desc: "Convention over Configuration 철학의 Ruby 풀스택 프레임워크. Active Record ORM과 스캐폴딩으로 빠르게 MVP를 만든다.", tags: ["Ruby", "풀스택", "MVC"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg" },
          { name: "Laravel", url: "https://laravel.com", desc: "PHP 최고의 풀스택 프레임워크. Eloquent ORM·Blade 템플릿·큐·스케줄링이 모두 내장되어 있다.", tags: ["PHP", "풀스택", "Eloquent"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
          { name: "ASP.NET Core", url: "https://dotnet.microsoft.com/apps/aspnet", desc: "Microsoft 크로스플랫폼 웹 프레임워크. Minimal API·Blazor·SignalR로 REST·실시간·WebAssembly 앱을 만든다.", tags: ["Microsoft", ".NET", "C#"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
          { name: "Gin", url: "https://gin-gonic.com", desc: "Go 고성능 HTTP 웹 프레임워크. 최소한의 메모리 사용으로 초당 수만 건 요청을 처리한다.", tags: ["Go", "고성능", "REST API"], logo: "" },
          { name: "Hono", url: "https://hono.dev", desc: "Edge/Cloudflare Workers에 최적화된 초경량 웹 프레임워크. Deno·Bun·Node.js 모두 지원한다.", tags: ["Edge", "경량", "TypeScript"], logo: "" },
        ]
      },
      {
        name: "빌드 도구 & 패키지 관리",
        tools: [
          { name: "npm", url: "https://www.npmjs.com", desc: "Node.js 기본 패키지 관리자. 전 세계 최대 패키지 레지스트리를 통해 자바스크립트 의존성을 관리한다.", tags: ["Node.js", "패키지", "레지스트리"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
          { name: "pnpm", url: "https://pnpm.io", desc: "공유 스토어 방식으로 디스크 공간을 절약하는 빠른 패키지 관리자. 모노레포 워크스페이스 지원이 강점이다.", tags: ["Node.js", "모노레포", "고속"], logo: "" },
          { name: "Yarn", url: "https://yarnpkg.com", desc: "Facebook이 만든 npm 대안 패키지 관리자. Plug'n'Play 모드로 node_modules 없이 의존성을 관리한다.", tags: ["Facebook", "패키지", "PnP"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg" },
          { name: "Vite", url: "https://vitejs.dev", desc: "ES 모듈 기반 초고속 프론트엔드 빌드 도구. 개발 서버 시작이 거의 즉각적이며 HMR이 빠르다.", tags: ["빌드", "HMR", "ES모듈"], logo: "" },
          { name: "Webpack", url: "https://webpack.js.org", desc: "가장 널리 쓰이는 JavaScript 모듈 번들러. 코드 스플리팅·트리 쉐이킹·로더로 복잡한 번들링을 처리한다.", tags: ["번들러", "코드 스플리팅", "로더"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" },
          { name: "esbuild", url: "https://esbuild.github.io", desc: "Go로 작성된 초고속 JavaScript 번들러. 기존 번들러보다 10~100배 빠르며 Vite의 내부 번들러로 쓰인다.", tags: ["Go", "고속", "번들러"], logo: "" },
          { name: "Turborepo", url: "https://turbo.build", desc: "JavaScript/TypeScript 모노레포 빌드 시스템. 태스크 캐싱과 병렬 실행으로 대규모 모노레포 빌드 시간을 단축한다.", tags: ["모노레포", "캐싱", "Vercel"], logo: "" },
          { name: "Maven", url: "https://maven.apache.org", desc: "Java 프로젝트 빌드·의존성·배포 관리 도구. XML pom.xml 기반으로 엔터프라이즈 Java 생태계의 표준이다.", tags: ["Java", "빌드", "의존성"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg" },
          { name: "Gradle", url: "https://gradle.org", desc: "Groovy/Kotlin DSL 기반 빌드 자동화 도구. Android 공식 빌드 시스템이며 증분 빌드로 빌드 시간을 줄인다.", tags: ["Android", "DSL", "증분 빌드"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-original.svg" },
          { name: "pip / Poetry / uv", url: "https://python-poetry.org", desc: "Python 패키지 관리 도구. Poetry는 의존성 잠금과 가상환경을 통합 관리하며, uv는 Rust 기반으로 100배 빠르다.", tags: ["Python", "의존성", "가상환경"], logo: "" },
        ]
      },
      {
        name: "컨테이너 & 인프라",
        tools: [
          { name: "Docker", url: "https://www.docker.com", desc: "컨테이너 이미지 빌드·실행 도구. '내 PC에서는 되는데' 문제를 해결하고 환경을 코드로 관리한다.", tags: ["컨테이너", "DevOps", "필수"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
          { name: "Kubernetes", url: "https://kubernetes.io", desc: "컨테이너 오케스트레이션 플랫폼. 자동 스케일링·롤링 배포·서비스 디스커버리를 처리한다.", tags: ["Google", "오케스트레이션", "클라우드"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
          { name: "Helm", url: "https://helm.sh", desc: "Kubernetes 패키지 매니저. Chart로 복잡한 앱 배포를 템플릿화하고 버전 관리한다.", tags: ["Kubernetes", "패키지", "템플릿"], logo: "" },
          { name: "Terraform", url: "https://www.terraform.io", desc: "HashiCorp IaC 도구. 클라우드 리소스를 선언적 코드로 프로비저닝하고 상태를 관리한다.", tags: ["HashiCorp", "IaC", "클라우드"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
          { name: "Pulumi", url: "https://www.pulumi.com", desc: "범용 언어(Python·TypeScript·Go)로 인프라를 코드화하는 IaC 도구. Terraform 대안으로 주목받는다.", tags: ["IaC", "다중 언어", "클라우드"], logo: "" },
          { name: "Ansible", url: "https://www.ansible.com", desc: "에이전트 없는 구성 관리 도구. YAML Playbook으로 서버 설정·배포를 자동화한다.", tags: ["Red Hat", "자동화", "SSH"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" },
          { name: "Nginx", url: "https://nginx.org", desc: "고성능 웹서버 겸 리버스 프록시. 이벤트 기반 아키텍처로 수만 동시 접속을 처리하며 로드 밸런서로도 쓰인다.", tags: ["웹서버", "리버스 프록시", "로드밸런서"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
          { name: "Istio", url: "https://istio.io", desc: "Kubernetes 서비스 메시. mTLS·트래픽 관리·관찰 가능성을 애플리케이션 코드 변경 없이 인프라 레벨에서 제공한다.", tags: ["서비스 메시", "Kubernetes", "보안"], logo: "" },
          { name: "Consul", url: "https://www.consul.io", desc: "HashiCorp 서비스 디스커버리 & 설정 관리 도구. 마이크로서비스 간 동적 라우팅과 헬스 체크를 처리한다.", tags: ["HashiCorp", "서비스 디스커버리", "마이크로서비스"], logo: "" },
          { name: "Vault", url: "https://www.vaultproject.io", desc: "HashiCorp 시크릿 관리 도구. API 키·DB 비밀번호·인증서를 중앙에서 안전하게 저장하고 동적으로 발급한다.", tags: ["HashiCorp", "시크릿", "보안"], logo: "" },
          { name: "Vagrant", url: "https://www.vagrantup.com", desc: "가상 개발 환경 구성 도구. Vagrantfile로 VirtualBox·VMware 가상 머신을 코드로 정의하고 재현 가능하게 만든다.", tags: ["HashiCorp", "가상머신", "개발환경"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vagrant/vagrant-original.svg" },
        ]
      },
      {
        name: "클라우드 플랫폼",
        tools: [
          { name: "AWS", url: "https://aws.amazon.com", desc: "세계 1위 클라우드 플랫폼. EC2·S3·Lambda·RDS 등 200개 이상 서비스로 인프라 전체를 클라우드에서 운영한다.", tags: ["Amazon", "클라우드", "IaaS"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
          { name: "Google Cloud Platform", url: "https://cloud.google.com", desc: "Google의 클라우드. BigQuery·Kubernetes Engine·AI/ML 서비스가 강점이며 전 세계 Google 인프라를 활용한다.", tags: ["Google", "클라우드", "AI"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
          { name: "Microsoft Azure", url: "https://azure.microsoft.com", desc: "Microsoft 클라우드. Active Directory·Office 365·Windows Server와의 통합이 뛰어나 엔터프라이즈에서 강세다.", tags: ["Microsoft", "엔터프라이즈", "하이브리드"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
          { name: "Vercel", url: "https://vercel.com", desc: "프론트엔드 전용 클라우드 플랫폼. Git push만으로 Next.js·React 앱을 글로벌 엣지 네트워크에 즉시 배포한다.", tags: ["프론트엔드", "Edge", "Next.js"], logo: "" },
          { name: "Netlify", url: "https://www.netlify.com", desc: "Jamstack 정적 사이트 배포 플랫폼. Git 연동 자동 배포·Functions·CMS 통합으로 풀스택 정적 사이트를 운영한다.", tags: ["Jamstack", "정적사이트", "Functions"], logo: "" },
          { name: "Cloudflare", url: "https://www.cloudflare.com", desc: "CDN·DDoS 방어·DNS·Workers 엣지 컴퓨팅을 제공하는 글로벌 네트워크 플랫폼.", tags: ["CDN", "보안", "Edge"], logo: "" },
          { name: "DigitalOcean", url: "https://www.digitalocean.com", desc: "개발자 친화적 클라우드 플랫폼. Droplet·App Platform·Managed DB로 스타트업과 개인 개발자가 쉽게 인프라를 구성한다.", tags: ["개발자", "스타트업", "VPS"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg" },
          { name: "Render", url: "https://render.com", desc: "Heroku 대안 PaaS. Dockerfile 또는 코드만으로 웹 서비스·Worker·DB를 자동 배포하며 무료 티어를 제공한다.", tags: ["PaaS", "무료 티어", "자동 배포"], logo: "" },
          { name: "Supabase", url: "https://supabase.com", desc: "Firebase 오픈소스 대안. PostgreSQL 기반으로 Auth·Realtime·Storage·Edge Functions을 한 번에 제공한다.", tags: ["오픈소스", "Firebase 대안", "PostgreSQL"], logo: "" },
        ]
      },
      {
        name: "CI/CD",
        tools: [
          { name: "GitHub Actions", url: "https://github.com/features/actions", desc: "GitHub 내장 CI/CD. YAML 워크플로우로 빌드·테스트·배포 파이프라인을 자동화한다.", tags: ["GitHub", "무료", "YAML"], logo: "" },
          { name: "Jenkins", url: "https://www.jenkins.io", desc: "Self-hosted 오픈소스 CI 서버. 방대한 플러그인으로 거의 모든 파이프라인을 구성할 수 있다.", tags: ["오픈소스", "Self-hosted", "플러그인"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
          { name: "GitLab CI", url: "https://docs.gitlab.com/ee/ci/", desc: "GitLab에 내장된 CI/CD. Runner 기반으로 병렬 파이프라인과 캐시 관리가 유연하다.", tags: ["GitLab", "내장", "Runner"], logo: "" },
          { name: "CircleCI", url: "https://circleci.com", desc: "클라우드·Self-hosted 하이브리드 CI/CD 플랫폼. 오비 기반 재사용 가능한 파이프라인 설정이 강점이다.", tags: ["클라우드", "하이브리드", "Orb"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/circleci/circleci-plain.svg" },
          { name: "ArgoCD", url: "https://argo-cd.readthedocs.io", desc: "Kubernetes GitOps 도구. Git 저장소 상태를 클러스터에 자동 동기화하여 선언적 배포를 실현한다.", tags: ["Kubernetes", "GitOps", "오픈소스"], logo: "" },
          { name: "Tekton", url: "https://tekton.dev", desc: "Kubernetes 네이티브 CI/CD 파이프라인 프레임워크. 클라우드 네이티브 환경의 표준 빌드 시스템으로 자리잡고 있다.", tags: ["Kubernetes", "클라우드 네이티브", "오픈소스"], logo: "" },
        ]
      },
      {
        name: "테스트",
        tools: [
          { name: "Jest", url: "https://jestjs.io", desc: "JavaScript 테스트 프레임워크. 빠른 스냅샷 테스트와 모킹으로 프론트엔드·Node 코드를 검증한다.", tags: ["Meta", "JavaScript", "스냅샷"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" },
          { name: "Vitest", url: "https://vitest.dev", desc: "Vite 기반 JavaScript 테스트 프레임워크. Jest 호환 API로 ES 모듈 환경에서 Jest보다 빠르게 동작한다.", tags: ["Vite", "JavaScript", "고속"], logo: "" },
          { name: "pytest", url: "https://pytest.org", desc: "Python 테스트 프레임워크. 픽스처·파라미터화·플러그인으로 단위·통합·E2E 테스트를 작성한다.", tags: ["Python", "픽스처", "오픈소스"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg" },
          { name: "JUnit", url: "https://junit.org", desc: "Java 단위 테스트 프레임워크의 표준. 어노테이션 기반 테스트 작성과 Spring Boot Test와의 통합이 자연스럽다.", tags: ["Java", "단위 테스트", "Spring"], logo: "" },
          { name: "Playwright", url: "https://playwright.dev", desc: "Microsoft가 만든 크로스 브라우저 E2E 테스트 도구. Chromium·Firefox·WebKit을 동시에 테스트한다.", tags: ["Microsoft", "E2E", "브라우저"], logo: "" },
          { name: "Cypress", url: "https://www.cypress.io", desc: "브라우저에서 직접 실행되는 E2E 테스트 도구. 실시간 리로드·타임트래블 디버깅·네트워크 스텁이 강점이다.", tags: ["E2E", "브라우저", "시각적"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-original.svg" },
          { name: "Selenium", url: "https://www.selenium.dev", desc: "브라우저 자동화 표준 프레임워크. WebDriver 프로토콜로 모든 브라우저를 제어하며 레거시 E2E 테스트의 기반이다.", tags: ["E2E", "브라우저 자동화", "다중 언어"], logo: "" },
          { name: "k6", url: "https://k6.io", desc: "Go 기반 오픈소스 부하 테스트 도구. JavaScript로 테스트 시나리오를 작성하고 Grafana로 결과를 시각화한다.", tags: ["부하 테스트", "성능", "오픈소스"], logo: "" },
          { name: "Locust", url: "https://locust.io", desc: "Python으로 부하 테스트 시나리오를 작성하는 오픈소스 도구. 분산 실행과 웹 UI 실시간 모니터링을 지원한다.", tags: ["Python", "부하 테스트", "분산"], logo: "" },
          { name: "Postman", url: "https://www.postman.com", desc: "REST/GraphQL API 테스트·문서화 도구. 컬렉션 공유와 자동화 테스트 실행을 지원한다.", tags: ["API", "테스트", "협업"], logo: "" },
        ]
      },
      {
        name: "API & 통신",
        tools: [
          { name: "GraphQL", url: "https://graphql.org", desc: "Facebook이 만든 API 쿼리 언어. 클라이언트가 필요한 데이터만 정확히 요청해 오버페칭·언더페칭 문제를 해결한다.", tags: ["Facebook", "API", "타입 시스템"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
          { name: "gRPC", url: "https://grpc.io", desc: "Google이 만든 고성능 RPC 프레임워크. Protocol Buffers와 HTTP/2로 마이크로서비스 간 통신을 효율화한다.", tags: ["Google", "RPC", "Protocol Buffers"], logo: "" },
          { name: "RabbitMQ", url: "https://www.rabbitmq.com", desc: "AMQP 기반 메시지 브로커. 큐·교환기·바인딩 패턴으로 서비스 간 비동기 메시지를 안정적으로 전달한다.", tags: ["메시지 큐", "AMQP", "비동기"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg" },
          { name: "WebSocket", url: "https://developer.mozilla.org/docs/Web/API/WebSocket", desc: "브라우저-서버 양방향 실시간 통신 프로토콜. 채팅·알림·실시간 대시보드에 HTTP 폴링 없이 지속 연결을 유지한다.", tags: ["실시간", "양방향", "프로토콜"], logo: "" },
          { name: "Socket.IO", url: "https://socket.io", desc: "WebSocket 기반 실시간 양방향 통신 라이브러리. 자동 재연결·룸·네임스페이스로 채팅·게임 서버를 쉽게 구현한다.", tags: ["WebSocket", "실시간", "Node.js"], logo: "" },
        ]
      },
      {
        name: "모니터링 & 로깅",
        tools: [
          { name: "Datadog", url: "https://www.datadoghq.com", desc: "통합 모니터링·APM·로그 분석 SaaS. 에이전트 설치만으로 인프라·앱·로그를 한 대시보드에서 관찰한다.", tags: ["APM", "모니터링", "SaaS"], logo: "" },
          { name: "Grafana", url: "https://grafana.com", desc: "오픈소스 메트릭 시각화 플랫폼. Prometheus·InfluxDB·Loki 등 수십 개 데이터 소스를 연결해 대시보드를 만든다.", tags: ["시각화", "오픈소스", "대시보드"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
          { name: "Prometheus", url: "https://prometheus.io", desc: "pull 방식 메트릭 수집·알림 시스템. PromQL로 시계열 데이터를 쿼리하며 Grafana와 세트로 사용된다.", tags: ["메트릭", "오픈소스", "PromQL"], logo: "" },
          { name: "ELK Stack", url: "https://www.elastic.co/elastic-stack", desc: "Elasticsearch·Logstash·Kibana 조합. 로그 수집·파싱·저장·시각화를 일관된 파이프라인으로 처리한다.", tags: ["로그", "검색", "시각화"], logo: "" },
          { name: "Sentry", url: "https://sentry.io", desc: "애플리케이션 에러 추적·성능 모니터링 플랫폼. 스택 트레이스·소스맵·이슈 연동으로 프로덕션 버그를 빠르게 진단한다.", tags: ["에러 추적", "APM", "SaaS"], logo: "" },
          { name: "OpenTelemetry", url: "https://opentelemetry.io", desc: "분산 추적·메트릭·로그를 위한 오픈 표준. 벤더 중립적으로 Jaeger·Prometheus·Datadog 등과 연동된다.", tags: ["오픈 표준", "분산 추적", "관찰가능성"], logo: "" },
          { name: "New Relic", url: "https://newrelic.com", desc: "풀스택 관찰 가능성 플랫폼. APM·인프라·브라우저·모바일 성능을 통합 모니터링하고 AI로 이상 탐지한다.", tags: ["APM", "풀스택", "AI 분석"], logo: "" },
          { name: "Loki", url: "https://grafana.com/oss/loki/", desc: "Grafana Labs의 로그 집계 시스템. Prometheus처럼 레이블 기반으로 로그를 인덱싱해 저비용으로 운영한다.", tags: ["로그", "Grafana", "오픈소스"], logo: "" },
        ]
      },
      {
        name: "보안",
        tools: [
          { name: "SonarQube", url: "https://www.sonarsource.com/products/sonarqube/", desc: "정적 코드 분석 플랫폼. 보안 취약점·코드 스멜·버그를 CI 파이프라인에서 자동으로 검출한다.", tags: ["SAST", "코드 품질", "CI 통합"], logo: "" },
          { name: "Snyk", url: "https://snyk.io", desc: "의존성·컨테이너·IaC 보안 취약점 스캐너. 개발 단계에서 CVE를 발견하고 자동 수정 PR을 생성한다.", tags: ["취약점", "의존성", "DevSecOps"], logo: "" },
          { name: "Keycloak", url: "https://www.keycloak.org", desc: "오픈소스 Identity Provider. OAuth2·OIDC·SAML을 지원하며 SSO·MFA·소셜 로그인을 자체 서버에서 운영한다.", tags: ["IAM", "SSO", "오픈소스"], logo: "" },
          { name: "Auth0", url: "https://auth0.com", desc: "인증·권한 부여 관리형 서비스. SDK 몇 줄로 소셜 로그인·MFA·엔터프라이즈 SSO를 빠르게 구현한다.", tags: ["IAM", "SaaS", "OAuth2"], logo: "" },
          { name: "OWASP ZAP", url: "https://www.zaproxy.org", desc: "오픈소스 웹 애플리케이션 보안 스캐너. DAST 방식으로 XSS·SQL인젝션·CSRF 등 OWASP Top 10 취약점을 탐지한다.", tags: ["DAST", "웹보안", "오픈소스"], logo: "" },
        ]
      },
      {
        name: "협업 & 프로젝트 관리",
        tools: [
          { name: "Jira", url: "https://www.atlassian.com/software/jira", desc: "Atlassian 이슈 트래킹 & 스크럼/칸반 보드. 스프린트 관리와 번다운 차트로 애자일 프로세스를 운영한다.", tags: ["Atlassian", "애자일", "스크럼"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
          { name: "Confluence", url: "https://www.atlassian.com/software/confluence", desc: "팀 위키 & 문서 플랫폼. 기술 문서·회의록·아키텍처 다이어그램을 협업으로 작성한다.", tags: ["Atlassian", "문서", "위키"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg" },
          { name: "Linear", url: "https://linear.app", desc: "개발팀을 위한 고속 이슈 트래커. 키보드 단축키 중심 UX와 Git 연동으로 Jira보다 빠른 워크플로우를 제공한다.", tags: ["이슈 트래킹", "개발팀", "고속"], logo: "" },
          { name: "Slack", url: "https://slack.com", desc: "채널 기반 팀 메신저. 봇·워크플로우 자동화와 GitHub·Jira 알림 통합이 강점이다.", tags: ["협업", "메신저", "통합"], logo: "" },
          { name: "Notion", url: "https://www.notion.so", desc: "문서·데이터베이스·칸반이 합쳐진 올인원 협업 도구. 개인 메모부터 팀 프로젝트까지 유연하게 사용한다.", tags: ["협업", "문서", "데이터베이스"], logo: "" },
          { name: "Figma", url: "https://www.figma.com", desc: "브라우저 기반 협업 UI/UX 디자인 도구. 개발자 핸드오프·디자인 시스템·프로토타입을 한 곳에서 처리한다.", tags: ["UI/UX", "디자인", "협업"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        ]
      }
    ]
  },
  ai: {
    label: "AI / ML",
    color: "#10b981",
    icon: "🤖",
    categories: [
      {
        name: "ML 프레임워크",
        tools: [
          { name: "PyTorch", url: "https://pytorch.org", desc: "Meta AI가 개발한 동적 그래프 딥러닝 프레임워크. 연구와 프로덕션 모두에 사용되며 생태계가 방대하다.", tags: ["Meta", "딥러닝", "Python"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
          { name: "TensorFlow / Keras", url: "https://www.tensorflow.org", desc: "Google의 딥러닝 플랫폼. Keras API로 빠르게 프로토타입을 만들고 TFX로 프로덕션 파이프라인을 구축한다.", tags: ["Google", "딥러닝", "Keras"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
          { name: "Scikit-learn", url: "https://scikit-learn.org", desc: "Python 전통 머신러닝 라이브러리. 분류·회귀·클러스터링·전처리 알고리즘을 일관된 API로 제공한다.", tags: ["오픈소스", "전통 ML", "Python"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
          { name: "XGBoost", url: "https://xgboost.readthedocs.io", desc: "Gradient Boosting 기반 고성능 앙상블 알고리즘. 정형 데이터 경진대회와 프로덕션 모델에서 압도적으로 쓰인다.", tags: ["Boosting", "정형 데이터", "고성능"], logo: "" },
          { name: "LightGBM", url: "https://lightgbm.readthedocs.io", desc: "Microsoft가 만든 Leaf-wise Gradient Boosting. XGBoost보다 빠르고 메모리 효율이 좋아 대용량 데이터에 적합하다.", tags: ["Microsoft", "Boosting", "고속"], logo: "" },
          { name: "CatBoost", url: "https://catboost.ai", desc: "Yandex가 만든 범주형 변수 특화 Boosting 라이브러리. 전처리 없이 범주형 피처를 자동으로 처리한다.", tags: ["Yandex", "범주형", "Boosting"], logo: "" },
          { name: "Hugging Face Transformers", url: "https://huggingface.co", desc: "사전학습 NLP·비전·오디오 모델을 즉시 사용할 수 있는 라이브러리. BERT·GPT·LLaMA 계열 모델을 손쉽게 파인튜닝한다.", tags: ["NLP", "LLM", "오픈소스"], logo: "" },
          { name: "JAX", url: "https://jax.readthedocs.io", desc: "Google이 만든 고성능 수치 연산 라이브러리. XLA 컴파일로 GPU/TPU를 최대로 활용하며 연구 코드에 주로 쓰인다.", tags: ["Google", "TPU", "연구"], logo: "" },
          { name: "ONNX", url: "https://onnx.ai", desc: "딥러닝 모델 교환 표준 포맷. PyTorch·TF 모델을 ONNX로 변환해 TensorRT·ONNX Runtime으로 최적화 추론한다.", tags: ["모델 변환", "표준", "최적화"], logo: "" },
        ]
      },
      {
        name: "LLM & 생성 AI",
        tools: [
          { name: "LangChain", url: "https://www.langchain.com", desc: "LLM 기반 애플리케이션 구축 프레임워크. RAG·에이전트·메모리·툴 호출 패턴을 체인으로 조합한다.", tags: ["LLM", "RAG", "에이전트"], logo: "" },
          { name: "LlamaIndex", url: "https://www.llamaindex.ai", desc: "LLM이 외부 데이터(문서·DB·API)를 인덱싱·검색하도록 연결하는 데이터 프레임워크.", tags: ["LLM", "인덱싱", "RAG"], logo: "" },
          { name: "Ollama", url: "https://ollama.com", desc: "로컬에서 오픈소스 LLM(LLaMA·Mistral·Gemma)을 한 줄 명령으로 실행하는 도구. GPU 없이도 동작한다.", tags: ["로컬 LLM", "오픈소스", "CLI"], logo: "" },
          { name: "OpenAI API", url: "https://platform.openai.com", desc: "GPT-4o·o3·DALL-E·Whisper 등 OpenAI 모델을 REST API로 호출하는 서비스.", tags: ["OpenAI", "GPT", "API"], logo: "" },
          { name: "Anthropic Claude API", url: "https://www.anthropic.com", desc: "Claude Sonnet·Opus·Haiku 모델을 API로 호출. 긴 컨텍스트·도구 사용·비전 기능을 지원한다.", tags: ["Anthropic", "Claude", "API"], logo: "" },
          { name: "Stable Diffusion", url: "https://stability.ai", desc: "오픈소스 텍스트→이미지 생성 모델. ControlNet·LoRA 파인튜닝으로 로컬에서 자유롭게 이미지를 생성한다.", tags: ["이미지 생성", "오픈소스", "로컬"], logo: "" },
          { name: "vLLM", url: "https://vllm.ai", desc: "LLM 추론 서빙 엔진. PagedAttention으로 GPU 메모리를 효율적으로 관리해 높은 처리량을 달성한다.", tags: ["추론", "서빙", "고성능"], logo: "" },
          { name: "Triton Inference Server", url: "https://developer.nvidia.com/triton-inference-server", desc: "NVIDIA의 프로덕션 AI 모델 서빙 서버. GPU 활용 최대화·동적 배칭·멀티 모델 동시 서빙을 지원한다.", tags: ["NVIDIA", "서빙", "GPU"], logo: "" },
        ]
      },
      {
        name: "NLP 라이브러리",
        tools: [
          { name: "spaCy", url: "https://spacy.io", desc: "프로덕션 수준 NLP 라이브러리. 형태소 분석·개체명 인식·의존 파싱을 빠르게 처리하며 커스텀 파이프라인을 만들 수 있다.", tags: ["NLP", "Python", "고속"], logo: "" },
          { name: "NLTK", url: "https://www.nltk.org", desc: "Python 자연어 처리 교육용 라이브러리. 토크나이징·형태소·코퍼스·문법 파싱을 폭넓게 다루며 학습용으로 최적이다.", tags: ["NLP", "Python", "교육"], logo: "" },
          { name: "Sentence Transformers", url: "https://www.sbert.net", desc: "문장·단락을 고품질 임베딩으로 변환하는 라이브러리. 의미 검색·중복 탐지·클러스터링에 활용된다.", tags: ["임베딩", "의미 검색", "Python"], logo: "" },
          { name: "Gensim", url: "https://radimrehurek.com/gensim/", desc: "Word2Vec·Doc2Vec·LDA 등 비지도 토픽 모델링 라이브러리. 대규모 텍스트 코퍼스에서 의미 표현을 학습한다.", tags: ["Word2Vec", "토픽 모델링", "Python"], logo: "" },
        ]
      },
      {
        name: "컴퓨터 비전",
        tools: [
          { name: "OpenCV", url: "https://opencv.org", desc: "컴퓨터 비전 알고리즘 표준 라이브러리. 이미지·영상 처리·객체 탐지·카메라 보정을 C++·Python으로 처리한다.", tags: ["비전", "이미지 처리", "C++/Python"], logo: "" },
          { name: "Ultralytics YOLO", url: "https://ultralytics.com", desc: "실시간 객체 탐지 모델 시리즈. 단일 패스로 탐지·분류·세그멘테이션을 처리하며 엣지 디바이스에도 배포한다.", tags: ["객체 탐지", "실시간", "오픈소스"], logo: "" },
          { name: "Detectron2", url: "https://github.com/facebookresearch/detectron2", desc: "Meta AI의 객체 탐지·세그멘테이션 프레임워크. Mask R-CNN·Panoptic 등 최신 비전 모델 구현체를 제공한다.", tags: ["Meta", "객체 탐지", "세그멘테이션"], logo: "" },
          { name: "Albumentations", url: "https://albumentations.ai", desc: "빠른 이미지 증강 라이브러리. 100여 가지 변환을 최적화된 속도로 적용해 비전 모델 학습 데이터를 늘린다.", tags: ["데이터 증강", "비전", "고속"], logo: "" },
        ]
      },
      {
        name: "데이터 처리",
        tools: [
          { name: "Pandas", url: "https://pandas.pydata.org", desc: "Python 데이터 분석 핵심 라이브러리. DataFrame으로 테이블 데이터를 탐색·변환·집계한다.", tags: ["Python", "DataFrame", "분석"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
          { name: "NumPy", url: "https://numpy.org", desc: "Python 다차원 배열 연산 라이브러리. 거의 모든 ML/데이터 라이브러리의 기반이 된다.", tags: ["Python", "배열", "수치"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
          { name: "Polars", url: "https://pola.rs", desc: "Rust로 작성된 초고속 DataFrame 라이브러리. Pandas 대비 수배~수십배 빠르며 메모리 효율이 좋다.", tags: ["Rust", "고성능", "DataFrame"], logo: "" },
          { name: "DuckDB", url: "https://duckdb.org", desc: "In-process 분석용 SQL DB. CSV·Parquet·JSON을 SQL로 직접 쿼리하며 Pandas보다 빠른 집계를 로컬에서 처리한다.", tags: ["SQL", "분석", "로컬"], logo: "" },
          { name: "Apache Spark", url: "https://spark.apache.org", desc: "대규모 분산 데이터 처리 엔진. SQL·스트리밍·ML을 통합 API로 처리하며 페타바이트급 데이터를 다룬다.", tags: ["분산처리", "빅데이터", "Scala/Python"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg" },
          { name: "Apache Kafka", url: "https://kafka.apache.org", desc: "분산 이벤트 스트리밍 플랫폼. 실시간 데이터 파이프라인과 스트림 처리를 초당 수백만 메시지 규모로 처리한다.", tags: ["스트리밍", "분산", "이벤트"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" },
          { name: "dbt", url: "https://www.getdbt.com", desc: "SQL 기반 데이터 변환 도구. 데이터 웨어하우스 내 모델 의존성·테스트·문서화를 코드로 관리한다.", tags: ["SQL", "ELT", "데이터 웨어하우스"], logo: "" },
          { name: "Ray", url: "https://www.ray.io", desc: "Python 분산 컴퓨팅 프레임워크. 하이퍼파라미터 튜닝·분산 학습·강화학습·서빙을 단일 API로 처리한다.", tags: ["분산", "병렬", "ML"], logo: "" },
          { name: "Apache Airflow", url: "https://airflow.apache.org", desc: "Python DAG 기반 워크플로우 오케스트레이터. 데이터 파이프라인·ML 학습 스케줄링에 널리 쓰인다.", tags: ["워크플로우", "스케줄링", "오픈소스"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apacheairflow/apacheairflow-original.svg" },
        ]
      },
      {
        name: "시각화",
        tools: [
          { name: "Matplotlib / Seaborn", url: "https://matplotlib.org", desc: "Python 정적 차트 라이브러리. 논문 수준의 그래프부터 EDA 히트맵까지 광범위하게 활용한다.", tags: ["Python", "정적", "EDA"], logo: "" },
          { name: "Plotly / Dash", url: "https://plotly.com", desc: "인터랙티브 웹 차트 라이브러리. Dash로 데이터 앱을 빠르게 구축하고 Plotly로 동적 시각화를 만든다.", tags: ["인터랙티브", "웹앱", "Python"], logo: "" },
          { name: "Streamlit", url: "https://streamlit.io", desc: "Python 스크립트를 웹 앱으로 변환하는 프레임워크. 데이터 분석 결과를 코드 몇 줄로 인터랙티브 대시보드로 공유한다.", tags: ["Python", "대시보드", "빠른 프로토타입"], logo: "" },
          { name: "Gradio", url: "https://www.gradio.app", desc: "ML 모델 데모 인터페이스를 빠르게 만드는 라이브러리. Hugging Face Spaces와 연동해 모델을 즉시 배포한다.", tags: ["ML 데모", "Python", "Hugging Face"], logo: "" },
          { name: "Tableau", url: "https://www.tableau.com", desc: "비코딩 BI 시각화 도구. 드래그앤드롭으로 대시보드를 만들고 기업 의사결정에 활용한다.", tags: ["BI", "대시보드", "기업용"], logo: "" },
          { name: "Power BI", url: "https://powerbi.microsoft.com", desc: "Microsoft BI 플랫폼. Excel·Azure·SQL Server와 통합이 뛰어나며 기업 보고서·대시보드 표준 도구다.", tags: ["Microsoft", "BI", "기업용"], logo: "" },
        ]
      },
      {
        name: "MLOps & 실험 관리",
        tools: [
          { name: "MLflow", url: "https://mlflow.org", desc: "ML 실험 추적·모델 레지스트리·배포를 통합 관리하는 오픈소스 플랫폼.", tags: ["실험 추적", "모델 레지스트리", "오픈소스"], logo: "" },
          { name: "Weights & Biases", url: "https://wandb.ai", desc: "실험 추적·하이퍼파라미터 스윕·모델 시각화 클라우드 서비스. 팀 협업과 재현성 확보에 유용하다.", tags: ["실험 추적", "시각화", "클라우드"], logo: "" },
          { name: "DVC", url: "https://dvc.org", desc: "데이터·모델 버전 관리 도구. Git과 연동해 대용량 데이터셋·모델 파일을 코드처럼 버전 추적한다.", tags: ["데이터 버전", "Git 연동", "오픈소스"], logo: "" },
          { name: "Kubeflow", url: "https://www.kubeflow.org", desc: "Kubernetes 위에서 ML 파이프라인·학습·서빙을 운영하는 오픈소스 MLOps 플랫폼.", tags: ["Kubernetes", "MLOps", "파이프라인"], logo: "" },
          { name: "Optuna", url: "https://optuna.org", desc: "자동 하이퍼파라미터 최적화 프레임워크. 베이지안 최적화·가지치기로 효율적으로 최적 파라미터를 탐색한다.", tags: ["하이퍼파라미터", "자동화", "베이지안"], logo: "" },
          { name: "Jupyter Notebook / Lab", url: "https://jupyter.org", desc: "대화형 Python 실행 환경. 코드·마크다운·시각화를 하나의 노트북 파일에서 반복적으로 실험한다.", tags: ["Python", "노트북", "EDA"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
          { name: "Google Colab", url: "https://colab.research.google.com", desc: "무료 클라우드 Jupyter 환경. GPU/TPU를 무료로 사용할 수 있어 딥러닝 실험 입문에 널리 쓰인다.", tags: ["Google", "무료 GPU", "클라우드"], logo: "" },
          { name: "Label Studio", url: "https://labelstud.io", desc: "오픈소스 데이터 레이블링 플랫폼. 텍스트·이미지·오디오·비디오 등 다양한 타입의 학습 데이터를 협업으로 어노테이션한다.", tags: ["레이블링", "오픈소스", "데이터 수집"], logo: "" },
        ]
      },
      {
        name: "클라우드 AI 서비스",
        tools: [
          { name: "AWS SageMaker", url: "https://aws.amazon.com/sagemaker/", desc: "AWS 완전 관리형 ML 플랫폼. 데이터 레이블링·학습·배포·모니터링을 엔드투엔드로 제공한다.", tags: ["AWS", "관리형", "엔드투엔드"], logo: "" },
          { name: "Google Vertex AI", url: "https://cloud.google.com/vertex-ai", desc: "Google Cloud ML 플랫폼. AutoML·커스텀 학습·Gemini API·Feature Store를 통합 제공한다.", tags: ["Google Cloud", "AutoML", "Gemini"], logo: "" },
          { name: "Azure ML", url: "https://azure.microsoft.com/products/machine-learning", desc: "Microsoft Azure ML 플랫폼. 책임 있는 AI 도구와 MLOps 파이프라인, OpenAI 통합을 지원한다.", tags: ["Azure", "MLOps", "OpenAI 통합"], logo: "" },
          { name: "Databricks", url: "https://www.databricks.com", desc: "Apache Spark 기반 통합 데이터·AI 플랫폼. Delta Lake·MLflow·Unity Catalog로 데이터 엔지니어링부터 ML 서빙까지 처리한다.", tags: ["Spark", "Delta Lake", "클라우드"], logo: "" },
        ]
      }
    ]
  },
  dba: {
    label: "DBA / 데이터베이스",
    color: "#f59e0b",
    icon: "🗄️",
    categories: [
      {
        name: "관계형 DB (RDBMS)",
        tools: [
          { name: "PostgreSQL", url: "https://www.postgresql.org", desc: "가장 기능이 풍부한 오픈소스 RDBMS. JSON·배열·GIS 확장(PostGIS)과 강력한 쿼리 플래너가 특징이다.", tags: ["오픈소스", "ACID", "확장성"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
          { name: "MySQL / MariaDB", url: "https://www.mysql.com", desc: "웹 서비스의 표준 RDBMS. 높은 읽기 성능과 광범위한 호스팅 지원으로 LAMP 스택의 핵심이다.", tags: ["오픈소스", "웹", "고성능 읽기"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
          { name: "Oracle Database", url: "https://www.oracle.com/database/", desc: "엔터프라이즈 표준 RDBMS. RAC 클러스터·파티셔닝·Exadata로 초대규모 OLTP를 처리한다.", tags: ["엔터프라이즈", "유료", "고가용성"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
          { name: "Microsoft SQL Server", url: "https://www.microsoft.com/sql-server", desc: "Windows 생태계 통합 RDBMS. SSRS·SSIS·Analysis Services로 BI 분석 플랫폼을 구성한다.", tags: ["Microsoft", "Windows", "BI"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
          { name: "SQLite", url: "https://www.sqlite.org", desc: "파일 기반 경량 임베디드 DB. 서버 없이 동작하며 모바일 앱·로컬 캐시·프로토타이핑에 적합하다.", tags: ["임베디드", "경량", "파일 기반"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
          { name: "CockroachDB", url: "https://www.cockroachlabs.com", desc: "PostgreSQL 호환 분산 RDBMS. 글로벌 멀티 리전 배포와 자동 샤딩으로 수평 확장 가능한 SQL DB를 제공한다.", tags: ["분산", "PostgreSQL 호환", "글로벌"], logo: "" },
          { name: "TiDB", url: "https://www.pingcap.com", desc: "MySQL 호환 분산 HTAP DB. OLTP와 OLAP를 동시에 처리하며 TiKV 스토리지로 수평 확장한다.", tags: ["MySQL 호환", "HTAP", "분산"], logo: "" },
        ]
      },
      {
        name: "NoSQL DB",
        tools: [
          { name: "MongoDB", url: "https://www.mongodb.com", desc: "문서 지향 NoSQL DB. JSON(BSON) 스키마로 유연한 데이터 모델을 구성하고 수평 샤딩으로 확장한다.", tags: ["문서형", "JSON", "샤딩"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
          { name: "Redis", url: "https://redis.io", desc: "인메모리 키-값 스토어. 캐싱·세션·실시간 리더보드·메시지 큐에 마이크로초 응답속도로 활용된다.", tags: ["인메모리", "캐시", "고속"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
          { name: "Elasticsearch", url: "https://www.elastic.co", desc: "분산 검색·분석 엔진. 로그 분석(ELK 스택)과 전문 검색·집계를 실시간으로 처리한다.", tags: ["검색", "ELK", "분석"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg" },
          { name: "Cassandra", url: "https://cassandra.apache.org", desc: "Google Bigtable 기반 와이드 컬럼 NoSQL. 단일 장애점 없이 멀티 DC 복제와 수십억 행 쓰기를 처리한다.", tags: ["와이드 컬럼", "고가용성", "멀티 DC"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cassandra/cassandra-original.svg" },
          { name: "Neo4j", url: "https://neo4j.com", desc: "그래프 DB. 노드·관계로 데이터를 모델링하고 Cypher 쿼리로 복잡한 연결 관계를 탐색한다.", tags: ["그래프", "Cypher", "관계 분석"], logo: "" },
          { name: "HBase", url: "https://hbase.apache.org", desc: "Hadoop 기반 와이드 컬럼 NoSQL. HDFS 위에서 수십억 행×수백만 컬럼 테이블을 랜덤 읽기/쓰기로 처리한다.", tags: ["Hadoop", "와이드 컬럼", "빅데이터"], logo: "" },
          { name: "Couchbase", url: "https://www.couchbase.com", desc: "문서형 NoSQL + SQL++ 쿼리 지원. 메모리 우선 캐싱과 글로벌 복제로 모바일·엣지 애플리케이션에 쓰인다.", tags: ["문서형", "캐싱", "모바일"], logo: "" },
        ]
      },
      {
        name: "클라우드 & 관리형 DB",
        tools: [
          { name: "Amazon RDS / Aurora", url: "https://aws.amazon.com/rds/", desc: "AWS 관리형 관계형 DB. 자동 백업·읽기 복제본·Multi-AZ 고가용성으로 운영 부담을 줄인다.", tags: ["AWS", "관리형", "고가용성"], logo: "" },
          { name: "Google BigQuery", url: "https://cloud.google.com/bigquery", desc: "Google Cloud 서버리스 데이터 웨어하우스. 페타바이트 쿼리를 초 단위로 처리하며 ML 기능이 내장되어 있다.", tags: ["Google Cloud", "서버리스", "데이터 웨어하우스"], logo: "" },
          { name: "Snowflake", url: "https://www.snowflake.com", desc: "클라우드 네이티브 데이터 플랫폼. 컴퓨팅·스토리지 분리 아키텍처로 멀티클라우드 데이터 공유를 지원한다.", tags: ["클라우드", "데이터 웨어하우스", "멀티클라우드"], logo: "" },
          { name: "Amazon DynamoDB", url: "https://aws.amazon.com/dynamodb/", desc: "AWS 완전 관리형 키-값·문서 DB. 밀리초 응답과 자동 스케일링으로 서버리스 워크로드에 적합하다.", tags: ["AWS", "서버리스", "키-값"], logo: "" },
          { name: "Amazon Redshift", url: "https://aws.amazon.com/redshift/", desc: "AWS 관리형 컬럼 스토어 데이터 웨어하우스. Redshift Spectrum으로 S3 데이터를 직접 쿼리한다.", tags: ["AWS", "데이터 웨어하우스", "컬럼 스토어"], logo: "" },
          { name: "Azure Synapse Analytics", url: "https://azure.microsoft.com/products/synapse-analytics", desc: "Microsoft 통합 분석 플랫폼. SQL·Spark·Synapse Link로 데이터 웨어하우스와 빅데이터를 통합 처리한다.", tags: ["Azure", "분석", "Spark"], logo: "" },
          { name: "Firebase Firestore", url: "https://firebase.google.com/products/firestore", desc: "Google 실시간 NoSQL DB. 클라이언트 직접 연결·실시간 동기화·오프라인 지원으로 모바일 앱 백엔드로 쓰인다.", tags: ["Google", "실시간", "모바일"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
          { name: "Supabase", url: "https://supabase.com", desc: "오픈소스 Firebase 대안. PostgreSQL 기반 Auth·Realtime·Storage·Edge Functions을 관리형으로 제공한다.", tags: ["오픈소스", "PostgreSQL", "관리형"], logo: "" },
          { name: "PlanetScale", url: "https://planetscale.com", desc: "Vitess 기반 MySQL 호환 서버리스 DB. 스키마 변경을 무중단으로 처리하는 브랜치 기능이 독특하다.", tags: ["MySQL 호환", "서버리스", "브랜치"], logo: "" },
          { name: "Neon", url: "https://neon.tech", desc: "서버리스 PostgreSQL. 스토리지·컴퓨팅 분리로 사용량 기반 과금하며 브랜치 기능으로 개발·테스트 환경을 즉시 생성한다.", tags: ["PostgreSQL", "서버리스", "브랜치"], logo: "" },
        ]
      },
      {
        name: "시계열 & 분석 DB",
        tools: [
          { name: "InfluxDB", url: "https://www.influxdata.com", desc: "시계열 전용 DB. IoT 센서·서버 메트릭·금융 데이터를 고속으로 수집·쿼리하며 Grafana와 세트로 쓰인다.", tags: ["시계열", "IoT", "메트릭"], logo: "" },
          { name: "TimescaleDB", url: "https://www.timescale.com", desc: "PostgreSQL 확장 시계열 DB. 하이퍼테이블로 시계열 쿼리를 최적화하면서 완전한 SQL을 유지한다.", tags: ["PostgreSQL", "시계열", "SQL"], logo: "" },
          { name: "ClickHouse", url: "https://clickhouse.com", desc: "초고속 컬럼 지향 분석 DB. 초당 수십억 행 집계로 실시간 분석 대시보드와 로그 분석에 최적이다.", tags: ["컬럼 스토어", "분석", "초고속"], logo: "" },
          { name: "Apache Druid", url: "https://druid.apache.org", desc: "실시간 OLAP DB. 이벤트 스트림을 수집해 서브초 집계 쿼리를 처리하며 광고·모니터링 분석에 쓰인다.", tags: ["OLAP", "실시간", "분산"], logo: "" },
          { name: "DuckDB", url: "https://duckdb.org", desc: "In-process 분석 SQL DB. Parquet·CSV를 파일 그대로 쿼리하며 Pandas보다 빠른 집계를 로컬에서 처리한다.", tags: ["분석", "로컬", "Parquet"], logo: "" },
          { name: "Apache Hive", url: "https://hive.apache.org", desc: "Hadoop HDFS 위의 SQL 인터페이스. HiveQL로 페타바이트 데이터를 MapReduce·Tez·Spark로 처리한다.", tags: ["Hadoop", "SQL", "빅데이터"], logo: "" },
        ]
      },
      {
        name: "데이터 레이크 & 포맷",
        tools: [
          { name: "Apache Parquet", url: "https://parquet.apache.org", desc: "컬럼 지향 이진 파일 포맷. 압축률과 분석 쿼리 성능이 뛰어나 데이터 레이크의 표준 저장 포맷이다.", tags: ["컬럼 포맷", "압축", "표준"], logo: "" },
          { name: "Apache Iceberg", url: "https://iceberg.apache.org", desc: "대규모 분석 테이블 오픈 포맷. ACID 트랜잭션·스키마 진화·파티션 진화를 지원해 데이터 레이크를 데이터 레이크하우스로 만든다.", tags: ["레이크하우스", "ACID", "오픈 포맷"], logo: "" },
          { name: "Delta Lake", url: "https://delta.io", desc: "Databricks가 만든 오픈소스 스토리지 레이어. Spark 위에서 ACID 트랜잭션·CDC·타임 트래블을 지원한다.", tags: ["Databricks", "ACID", "Spark"], logo: "" },
          { name: "Apache Hudi", url: "https://hudi.apache.org", desc: "레이크하우스 스토리지 포맷. Upsert·변경 스트림 수집을 최적화해 CDC 기반 실시간 데이터 레이크를 구성한다.", tags: ["CDC", "Upsert", "레이크하우스"], logo: "" },
        ]
      },
      {
        name: "쿼리 도구 & GUI",
        tools: [
          { name: "DBeaver", url: "https://dbeaver.io", desc: "모든 DB를 지원하는 무료 범용 DB 클라이언트. ERD·쿼리 편집기·데이터 내보내기를 한 곳에서 제공한다.", tags: ["무료", "범용", "오픈소스"], logo: "" },
          { name: "TablePlus", url: "https://tableplus.com", desc: "macOS/Windows 네이티브 DB GUI. 깔끔한 UI와 빠른 응답으로 개발자에게 인기가 높다.", tags: ["GUI", "macOS", "유료"], logo: "" },
          { name: "DataGrip", url: "https://www.jetbrains.com/datagrip/", desc: "JetBrains DB IDE. 스마트 SQL 완성·ERD·쿼리 최적화 힌트를 제공한다.", tags: ["JetBrains", "IDE", "유료"], logo: "" },
          { name: "pgAdmin", url: "https://www.pgadmin.org", desc: "PostgreSQL 공식 웹/데스크톱 관리 도구. 쿼리 툴·백업·슬로우 쿼리 분석을 무료로 사용한다.", tags: ["PostgreSQL", "무료", "공식"], logo: "" },
          { name: "Redis Insight", url: "https://redis.io/insight/", desc: "Redis 공식 GUI. 키 탐색·CLI·메모리 분석·슬로우 로그를 시각적으로 관리한다.", tags: ["Redis", "무료", "공식"], logo: "" },
          { name: "Robo 3T / Studio 3T", url: "https://studio3t.com", desc: "MongoDB 전용 GUI 클라이언트. 인텔리전트 자동완성·비주얼 쿼리 빌더·집계 파이프라인 편집기를 제공한다.", tags: ["MongoDB", "GUI", "유료"], logo: "" },
          { name: "Metabase", url: "https://www.metabase.com", desc: "비개발자도 쓸 수 있는 오픈소스 BI 도구. 시각적 쿼리 빌더로 DB에서 직접 대시보드를 만든다.", tags: ["BI", "오픈소스", "비개발자"], logo: "" },
        ]
      },
      {
        name: "성능 분석 & 모니터링",
        tools: [
          { name: "EXPLAIN / EXPLAIN ANALYZE", url: "https://www.postgresql.org/docs/current/sql-explain.html", desc: "SQL 실행 계획 분석 명령. 쿼리 비용·인덱스 사용·조인 방식을 파악하여 쿼리를 튜닝한다.", tags: ["SQL", "쿼리 튜닝", "필수"], logo: "" },
          { name: "pgBadger", url: "https://pgbadger.darold.net", desc: "PostgreSQL 슬로우 쿼리 로그 분석기. HTML 리포트로 쿼리 빈도·평균 실행 시간·락 정보를 시각화한다.", tags: ["PostgreSQL", "로그 분석", "오픈소스"], logo: "" },
          { name: "Percona Monitoring (PMM)", url: "https://www.percona.com/software/database-tools/percona-monitoring-and-management", desc: "MySQL·PostgreSQL·MongoDB 통합 모니터링 플랫폼. QAN·Grafana 대시보드로 DB 성능을 실시간 분석한다.", tags: ["모니터링", "오픈소스", "멀티 DB"], logo: "" },
          { name: "pt-query-digest", url: "https://docs.percona.com/percona-toolkit/pt-query-digest.html", desc: "Percona Toolkit MySQL 슬로우 쿼리 분석 도구. 실행 빈도·합산 시간·공분산으로 쿼리를 우선순위화한다.", tags: ["MySQL", "슬로우 쿼리", "CLI"], logo: "" },
          { name: "Prometheus + Grafana", url: "https://prometheus.io", desc: "메트릭 수집·알림·시각화 오픈소스 조합. DB exporter를 붙여 연결 수·캐시 히트·복제 지연을 관찰한다.", tags: ["모니터링", "시계열", "오픈소스"], logo: "" },
          { name: "pganalyze", url: "https://pganalyze.com", desc: "PostgreSQL 전문 성능 분석 SaaS. 인덱스 추천·쿼리 최적화·VACUUM 상태·복제 지연을 자동 분석한다.", tags: ["PostgreSQL", "SaaS", "인덱스 추천"], logo: "" },
        ]
      },
      {
        name: "마이그레이션 & 백업",
        tools: [
          { name: "Flyway", url: "https://flywaydb.org", desc: "SQL 파일 기반 DB 스키마 버전 관리 도구. 버전 번호를 붙인 마이그레이션 스크립트를 자동으로 순서대로 실행한다.", tags: ["마이그레이션", "버전 관리", "오픈소스"], logo: "" },
          { name: "Liquibase", url: "https://www.liquibase.com", desc: "XML·YAML·SQL로 DB 변경을 추적하는 마이그레이션 도구. 롤백·변경 이력·다중 DB 지원이 강점이다.", tags: ["마이그레이션", "롤백", "다중 DB"], logo: "" },
          { name: "pg_dump / pg_restore", url: "https://www.postgresql.org/docs/current/app-pgdump.html", desc: "PostgreSQL 공식 백업 도구. 논리 백업으로 테이블·스키마 단위 내보내기·복원을 수행한다.", tags: ["PostgreSQL", "백업", "CLI"], logo: "" },
          { name: "AWS DMS", url: "https://aws.amazon.com/dms/", desc: "AWS 데이터베이스 마이그레이션 서비스. 이기종 DB 간 온라인 마이그레이션과 CDC 복제를 지원한다.", tags: ["AWS", "마이그레이션", "CDC"], logo: "" },
          { name: "Debezium", url: "https://debezium.io", desc: "CDC(변경 데이터 캡처) 오픈소스 플랫폼. DB 트랜잭션 로그를 읽어 Kafka로 실시간 변경 이벤트를 스트리밍한다.", tags: ["CDC", "Kafka", "실시간"], logo: "" },
          { name: "Barman", url: "https://pgbarman.org", desc: "PostgreSQL 엔터프라이즈 백업·복구 관리 도구. WAL 스트리밍·PITR·원격 백업으로 RPO를 최소화한다.", tags: ["PostgreSQL", "백업", "PITR"], logo: "" },
        ]
      },
      {
        name: "벡터 DB",
        tools: [
          { name: "Pinecone", url: "https://www.pinecone.io", desc: "완전 관리형 벡터 DB 클라우드 서비스. ANN 검색으로 AI 임베딩·RAG 시스템의 유사도 검색을 처리한다.", tags: ["벡터 검색", "관리형", "RAG"], logo: "" },
          { name: "Weaviate", url: "https://weaviate.io", desc: "오픈소스 벡터 DB. 모듈식 구조로 텍스트·이미지·멀티모달 벡터를 하이브리드 검색으로 처리한다.", tags: ["오픈소스", "벡터 검색", "멀티모달"], logo: "" },
          { name: "Qdrant", url: "https://qdrant.tech", desc: "Rust로 작성된 고성능 벡터 DB. 페이로드 필터링과 양자화 압축으로 대규모 벡터를 효율적으로 검색한다.", tags: ["Rust", "벡터 검색", "고성능"], logo: "" },
          { name: "Milvus", url: "https://milvus.io", desc: "클라우드 네이티브 오픈소스 벡터 DB. 수십억 개 벡터를 분산 처리하며 다양한 인덱스 알고리즘을 지원한다.", tags: ["오픈소스", "분산", "대규모"], logo: "" },
          { name: "pgvector", url: "https://github.com/pgvector/pgvector", desc: "PostgreSQL 벡터 유사도 검색 확장. 기존 PostgreSQL에 ANN 인덱스를 추가해 LLM 임베딩을 저장·검색한다.", tags: ["PostgreSQL", "벡터 검색", "확장"], logo: "" },
          { name: "Chroma", url: "https://www.trychroma.com", desc: "Python 우선 임베딩 DB. LangChain·LlamaIndex와 간편하게 연동되어 로컬 RAG 프로토타입에 자주 쓰인다.", tags: ["Python", "로컬", "RAG"], logo: "" },
        ]
      }
    ]
  }
};
