const toolsData = {
  dev: {
    label: "개발 (Development)",
    color: "#6366f1",
    icon: "💻",
    categories: [
      {
        name: "IDE / 에디터",
        tools: [
          { name: "VS Code", desc: "가장 널리 쓰이는 경량 코드 에디터. 플러그인 생태계가 풍부하고 모든 언어를 지원한다.", tags: ["Microsoft", "무료", "크로스플랫폼"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
          { name: "IntelliJ IDEA", desc: "JVM 기반 언어(Java, Kotlin, Scala)에 최적화된 강력한 IDE. 스마트 리팩터링과 디버거가 뛰어나다.", tags: ["JetBrains", "유료/커뮤니티", "Java"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" },
          { name: "PyCharm", desc: "Python 전용 IDE. 과학 도구(Jupyter, Pandas) 통합과 가상환경 관리가 편리하다.", tags: ["JetBrains", "유료/커뮤니티", "Python"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg" },
          { name: "Vim / Neovim", desc: "터미널 기반 텍스트 에디터. 키보드 중심 워크플로우로 서버 환경에서도 강력하게 동작한다.", tags: ["오픈소스", "터미널", "고속"], logo: "" },
          { name: "Cursor", desc: "AI 코드 완성이 내장된 VS Code 포크. GPT-4 기반 자동완성·채팅으로 AI 페어 프로그래밍을 지원한다.", tags: ["AI", "VS Code 기반", "유료"], logo: "" },
          { name: "Xcode", desc: "Apple 공식 IDE. iOS/macOS 앱 개발과 Swift 언어를 위한 필수 도구다.", tags: ["Apple", "macOS", "Swift"], logo: "" },
          { name: "Android Studio", desc: "Google 공식 Android 개발 IDE. Jetpack Compose 지원과 에뮬레이터가 내장되어 있다.", tags: ["Google", "Android", "Kotlin"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" },
        ]
      },
      {
        name: "버전 관리",
        tools: [
          { name: "Git", desc: "분산 버전 관리 시스템의 표준. 브랜치·머지·리베이스로 팀 협업 코드를 추적한다.", tags: ["오픈소스", "필수", "CLI"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
          { name: "GitHub", desc: "Git 원격 저장소 호스팅 + PR·Issue·Actions 기반 협업 플랫폼.", tags: ["Microsoft", "클라우드", "협업"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
          { name: "GitLab", desc: "Self-hosted 가능한 DevSecOps 플랫폼. CI/CD 파이프라인이 내장되어 있다.", tags: ["오픈소스", "Self-hosted", "CI/CD"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
          { name: "Bitbucket", desc: "Atlassian 생태계(Jira, Confluence)와 통합된 Git 호스팅 서비스.", tags: ["Atlassian", "Jira 연동", "클라우드"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg" },
        ]
      },
      {
        name: "언어 & 런타임",
        tools: [
          { name: "Python", desc: "범용 스크립팅·웹·AI 언어. 생산성이 높고 데이터 과학 라이브러리가 풍부하다.", tags: ["인터프리터", "범용", "AI/ML"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
          { name: "JavaScript / TypeScript", desc: "브라우저와 Node.js 환경의 표준 언어. TypeScript는 정적 타입으로 대규모 코드베이스를 관리한다.", tags: ["웹", "Node.js", "프론트엔드"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
          { name: "Java", desc: "엔터프라이즈 백엔드의 강자. JVM 생태계와 Spring Framework로 대규모 서비스를 구축한다.", tags: ["JVM", "엔터프라이즈", "OOP"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
          { name: "Kotlin", desc: "JVM 호환 현대 언어. Android 공식 언어이며 간결한 문법으로 Java를 대체한다.", tags: ["JVM", "Android", "Modern"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
          { name: "Go", desc: "Google이 만든 컴파일 언어. 동시성 처리와 빠른 빌드로 마이크로서비스·CLi 도구에 적합하다.", tags: ["Google", "고성능", "동시성"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
          { name: "Rust", desc: "메모리 안전성을 컴파일 타임에 보장하는 시스템 언어. WebAssembly·임베디드·고성능 서버에 쓰인다.", tags: ["시스템", "메모리 안전", "고성능"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg" },
        ]
      },
      {
        name: "웹 프레임워크",
        tools: [
          { name: "React", desc: "Meta가 만든 컴포넌트 기반 UI 라이브러리. 생태계가 광대하며 SPA·SSR 모두 지원한다.", tags: ["Meta", "SPA", "컴포넌트"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          { name: "Next.js", desc: "React 기반 풀스택 프레임워크. SSR·SSG·App Router로 SEO와 성능을 동시에 확보한다.", tags: ["Vercel", "SSR", "풀스택"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
          { name: "Vue.js", desc: "진입 장벽이 낮은 프로그레시브 UI 프레임워크. Options API와 Composition API를 모두 지원한다.", tags: ["오픈소스", "프로그레시브", "SPA"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
          { name: "FastAPI", desc: "Python 비동기 웹 프레임워크. 타입 힌트 기반 자동 OpenAPI 문서 생성이 강점이다.", tags: ["Python", "비동기", "REST API"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
          { name: "Spring Boot", desc: "Java 엔터프라이즈 표준 프레임워크. 자동 설정과 방대한 생태계로 백엔드 API·배치를 구축한다.", tags: ["Java", "엔터프라이즈", "REST"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
          { name: "Django", desc: "Python '배터리 포함' 웹 프레임워크. ORM·관리자 패널·인증이 내장되어 빠른 개발이 가능하다.", tags: ["Python", "풀스택", "ORM"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
        ]
      },
      {
        name: "컨테이너 & 인프라",
        tools: [
          { name: "Docker", desc: "컨테이너 이미지 빌드·실행 도구. '내 PC에서는 되는데' 문제를 해결하고 환경을 코드로 관리한다.", tags: ["컨테이너", "DevOps", "필수"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
          { name: "Kubernetes", desc: "컨테이너 오케스트레이션 플랫폼. 자동 스케일링·롤링 배포·서비스 디스커버리를 처리한다.", tags: ["Google", "오케스트레이션", "클라우드"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
          { name: "Terraform", desc: "HashiCorp IaC 도구. 클라우드 리소스를 선언적 코드로 프로비저닝하고 상태를 관리한다.", tags: ["HashiCorp", "IaC", "클라우드"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
          { name: "Ansible", desc: "에이전트 없는 구성 관리 도구. YAML Playbook으로 서버 설정·배포를 자동화한다.", tags: ["Red Hat", "자동화", "SSH"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" },
        ]
      },
      {
        name: "CI/CD",
        tools: [
          { name: "GitHub Actions", desc: "GitHub 내장 CI/CD. YAML 워크플로우로 빌드·테스트·배포 파이프라인을 자동화한다.", tags: ["GitHub", "무료", "YAML"], logo: "" },
          { name: "Jenkins", desc: "Self-hosted 오픈소스 CI 서버. 방대한 플러그인으로 거의 모든 파이프라인을 구성할 수 있다.", tags: ["오픈소스", "Self-hosted", "플러그인"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
          { name: "GitLab CI", desc: "GitLab에 내장된 CI/CD. Runner 기반으로 병렬 파이프라인과 캐시 관리가 유연하다.", tags: ["GitLab", "내장", "Runner"], logo: "" },
          { name: "ArgoCD", desc: "Kubernetes GitOps 도구. Git 저장소 상태를 클러스터에 자동 동기화하여 선언적 배포를 실현한다.", tags: ["Kubernetes", "GitOps", "오픈소스"], logo: "" },
        ]
      },
      {
        name: "테스트",
        tools: [
          { name: "Jest", desc: "JavaScript 테스트 프레임워크. 빠른 스냅샷 테스트와 모킹으로 프론트엔드·Node 코드를 검증한다.", tags: ["Meta", "JavaScript", "스냅샷"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" },
          { name: "pytest", desc: "Python 테스트 프레임워크. 픽스처·파라미터화·플러그인으로 단위·통합·E2E 테스트를 작성한다.", tags: ["Python", "픽스처", "오픈소스"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg" },
          { name: "Playwright", desc: "Microsoft가 만든 크로스 브라우저 E2E 테스트 도구. Chromium·Firefox·WebKit을 동시에 테스트한다.", tags: ["Microsoft", "E2E", "브라우저"], logo: "" },
          { name: "Postman", desc: "REST/GraphQL API 테스트·문서화 도구. 컬렉션 공유와 자동화 테스트 실행을 지원한다.", tags: ["API", "테스트", "협업"], logo: "" },
        ]
      },
      {
        name: "협업 & 프로젝트 관리",
        tools: [
          { name: "Jira", desc: "Atlassian 이슈 트래킹 & 스크럼/칸반 보드. 스프린트 관리와 번다운 차트로 애자일 프로세스를 운영한다.", tags: ["Atlassian", "애자일", "스크럼"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
          { name: "Confluence", desc: "팀 위키 & 문서 플랫폼. 기술 문서·회의록·아키텍처 다이어그램을 협업으로 작성한다.", tags: ["Atlassian", "문서", "위키"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg" },
          { name: "Slack", desc: "채널 기반 팀 메신저. 봇·워크플로우 자동화와 GitHub·Jira 알림 통합이 강점이다.", tags: ["협업", "메신저", "통합"], logo: "" },
          { name: "Notion", desc: "문서·데이터베이스·칸반이 합쳐진 올인원 협업 도구. 개인 메모부터 팀 프로젝트까지 유연하게 사용한다.", tags: ["협업", "문서", "데이터베이스"], logo: "" },
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
          { name: "PyTorch", desc: "Meta AI가 개발한 동적 그래프 딥러닝 프레임워크. 연구와 프로덕션 모두에 사용되며 생태계가 방대하다.", tags: ["Meta", "딥러닝", "Python"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
          { name: "TensorFlow / Keras", desc: "Google의 딥러닝 플랫폼. Keras API로 빠르게 프로토타입을 만들고 TFX로 프로덕션 파이프라인을 구축한다.", tags: ["Google", "딥러닝", "Keras"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
          { name: "Scikit-learn", desc: "Python 전통 머신러닝 라이브러리. 분류·회귀·클러스터링·전처리 알고리즘을 일관된 API로 제공한다.", tags: ["오픈소스", "전통 ML", "Python"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
          { name: "XGBoost / LightGBM", desc: "Gradient Boosting 기반 고성능 앙상블 알고리즘. 정형 데이터 경진대회와 프로덕션 모델에서 압도적으로 쓰인다.", tags: ["Boosting", "정형 데이터", "고성능"], logo: "" },
          { name: "Hugging Face Transformers", desc: "사전학습 NLP·비전·오디오 모델을 즉시 사용할 수 있는 라이브러리. BERT·GPT·LLaMA 계열 모델을 손쉽게 파인튜닝한다.", tags: ["NLP", "LLM", "오픈소스"], logo: "" },
          { name: "JAX", desc: "Google이 만든 고성능 수치 연산 라이브러리. XLA 컴파일로 GPU/TPU를 최대로 활용하며 연구 코드에 주로 쓰인다.", tags: ["Google", "TPU", "연구"], logo: "" },
        ]
      },
      {
        name: "LLM & 생성 AI",
        tools: [
          { name: "LangChain", desc: "LLM 기반 애플리케이션 구축 프레임워크. RAG·에이전트·메모리·툴 호출 패턴을 체인으로 조합한다.", tags: ["LLM", "RAG", "에이전트"], logo: "" },
          { name: "LlamaIndex", desc: "LLM이 외부 데이터(문서·DB·API)를 인덱싱·검색하도록 연결하는 데이터 프레임워크.", tags: ["LLM", "인덱싱", "RAG"], logo: "" },
          { name: "Ollama", desc: "로컬에서 오픈소스 LLM(LLaMA·Mistral·Gemma)을 한 줄 명령으로 실행하는 도구. GPU 없이도 동작한다.", tags: ["로컬 LLM", "오픈소스", "CLI"], logo: "" },
          { name: "OpenAI API", desc: "GPT-4o·o3·DALL-E·Whisper 등 OpenAI 모델을 REST API로 호출하는 서비스.", tags: ["OpenAI", "GPT", "API"], logo: "" },
          { name: "Anthropic Claude API", desc: "Claude Sonnet·Opus·Haiku 모델을 API로 호출. 긴 컨텍스트·도구 사용·비전 기능을 지원한다.", tags: ["Anthropic", "Claude", "API"], logo: "" },
          { name: "vLLM", desc: "LLM 추론 서빙 엔진. PagedAttention으로 GPU 메모리를 효율적으로 관리해 높은 처리량을 달성한다.", tags: ["추론", "서빙", "고성능"], logo: "" },
        ]
      },
      {
        name: "데이터 처리",
        tools: [
          { name: "Pandas", desc: "Python 데이터 분석 핵심 라이브러리. DataFrame으로 테이블 데이터를 탐색·변환·집계한다.", tags: ["Python", "DataFrame", "분석"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
          { name: "NumPy", desc: "Python 다차원 배열 연산 라이브러리. 거의 모든 ML/데이터 라이브러리의 기반이 된다.", tags: ["Python", "배열", "수치"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
          { name: "Apache Spark", desc: "대규모 분산 데이터 처리 엔진. SQL·스트리밍·ML을 통합 API로 처리하며 페타바이트급 데이터를 다룬다.", tags: ["분산처리", "빅데이터", "Scala/Python"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg" },
          { name: "Polars", desc: "Rust로 작성된 초고속 DataFrame 라이브러리. Pandas 대비 수배~수십배 빠르며 메모리 효율이 좋다.", tags: ["Rust", "고성능", "DataFrame"], logo: "" },
          { name: "dbt", desc: "SQL 기반 데이터 변환 도구. 데이터 웨어하우스 내 모델 의존성·테스트·문서화를 코드로 관리한다.", tags: ["SQL", "ELT", "데이터 웨어하우스"], logo: "" },
          { name: "Apache Kafka", desc: "분산 이벤트 스트리밍 플랫폼. 실시간 데이터 파이프라인과 스트림 처리를 초당 수백만 메시지 규모로 처리한다.", tags: ["스트리밍", "분산", "이벤트"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" },
        ]
      },
      {
        name: "시각화",
        tools: [
          { name: "Matplotlib / Seaborn", desc: "Python 정적 차트 라이브러리. 논문 수준의 그래프부터 EDA 히트맵까지 광범위하게 활용한다.", tags: ["Python", "정적", "EDA"], logo: "" },
          { name: "Plotly / Dash", desc: "인터랙티브 웹 차트 라이브러리. Dash로 데이터 앱을 빠르게 구축하고 Plotly로 동적 시각화를 만든다.", tags: ["인터랙티브", "웹앱", "Python"], logo: "" },
          { name: "Tableau", desc: "비코딩 BI 시각화 도구. 드래그앤드롭으로 대시보드를 만들고 기업 의사결정에 활용한다.", tags: ["BI", "대시보드", "기업용"], logo: "" },
          { name: "Grafana", desc: "시계열 지표 모니터링 대시보드. Prometheus·InfluxDB 등과 연동해 인프라·ML 모델 성능을 실시간으로 관찰한다.", tags: ["모니터링", "시계열", "오픈소스"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
        ]
      },
      {
        name: "MLOps & 실험 관리",
        tools: [
          { name: "MLflow", desc: "ML 실험 추적·모델 레지스트리·배포를 통합 관리하는 오픈소스 플랫폼.", tags: ["실험 추적", "모델 레지스트리", "오픈소스"], logo: "" },
          { name: "Weights & Biases", desc: "실험 추적·하이퍼파라미터 스윕·모델 시각화 클라우드 서비스. 팀 협업과 재현성 확보에 유용하다.", tags: ["실험 추적", "시각화", "클라우드"], logo: "" },
          { name: "Airflow", desc: "Python DAG 기반 워크플로우 오케스트레이터. 데이터 파이프라인·ML 학습 스케줄링에 널리 쓰인다.", tags: ["워크플로우", "스케줄링", "오픈소스"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apacheairflow/apacheairflow-original.svg" },
          { name: "Kubeflow", desc: "Kubernetes 위에서 ML 파이프라인·학습·서빙을 운영하는 오픈소스 MLOps 플랫폼.", tags: ["Kubernetes", "MLOps", "파이프라인"], logo: "" },
          { name: "Jupyter Notebook / Lab", desc: "대화형 Python 실행 환경. 코드·마크다운·시각화를 하나의 노트북 파일에서 반복적으로 실험한다.", tags: ["Python", "노트북", "EDA"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
        ]
      },
      {
        name: "클라우드 AI 서비스",
        tools: [
          { name: "AWS SageMaker", desc: "AWS 완전 관리형 ML 플랫폼. 데이터 레이블링·학습·배포·모니터링을 엔드투엔드로 제공한다.", tags: ["AWS", "관리형", "엔드투엔드"], logo: "" },
          { name: "Google Vertex AI", desc: "Google Cloud ML 플랫폼. AutoML·커스텀 학습·Gemini API·Feature Store를 통합 제공한다.", tags: ["Google Cloud", "AutoML", "Gemini"], logo: "" },
          { name: "Azure ML", desc: "Microsoft Azure ML 플랫폼. 책임 있는 AI 도구와 MLOps 파이프라인, OpenAI 통합을 지원한다.", tags: ["Azure", "MLOps", "OpenAI 통합"], logo: "" },
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
          { name: "PostgreSQL", desc: "가장 기능이 풍부한 오픈소스 RDBMS. JSON·배열·GIS 확장(PostGIS)과 강력한 쿼리 플래너가 특징이다.", tags: ["오픈소스", "ACID", "확장성"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
          { name: "MySQL / MariaDB", desc: "웹 서비스의 표준 RDBMS. 높은 읽기 성능과 광범위한 호스팅 지원으로 LAMP 스택의 핵심이다.", tags: ["오픈소스", "웹", "고성능 읽기"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
          { name: "Oracle Database", desc: "엔터프라이즈 표준 RDBMS. RAC 클러스터·파티셔닝·Exadata로 초대규모 OLTP를 처리한다.", tags: ["엔터프라이즈", "유료", "고가용성"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
          { name: "Microsoft SQL Server", desc: "Windows 생태계 통합 RDBMS. SSRS·SSIS·Analysis Services로 BI 분석 플랫폼을 구성한다.", tags: ["Microsoft", "Windows", "BI"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
          { name: "SQLite", desc: "파일 기반 경량 임베디드 DB. 서버 없이 동작하며 모바일 앱·로컬 캐시·프로토타이핑에 적합하다.", tags: ["임베디드", "경량", "파일 기반"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
        ]
      },
      {
        name: "NoSQL DB",
        tools: [
          { name: "MongoDB", desc: "문서 지향 NoSQL DB. JSON(BSON) 스키마로 유연한 데이터 모델을 구성하고 수평 샤딩으로 확장한다.", tags: ["문서형", "JSON", "샤딩"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
          { name: "Redis", desc: "인메모리 키-값 스토어. 캐싱·세션·실시간 리더보드·메시지 큐에 마이크로초 응답속도로 활용된다.", tags: ["인메모리", "캐시", "고속"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
          { name: "Elasticsearch", desc: "분산 검색·분석 엔진. 로그 분석(ELK 스택)과 전문 검색·집계를 실시간으로 처리한다.", tags: ["검색", "ELK", "분석"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg" },
          { name: "Cassandra", desc: "Google Bigtable 기반 와이드 컬럼 NoSQL. 단일 장애점 없이 멀티 DC 복제와 수십억 행 쓰기를 처리한다.", tags: ["와이드 컬럼", "고가용성", "멀티 DC"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cassandra/cassandra-original.svg" },
          { name: "Neo4j", desc: "그래프 DB. 노드·관계로 데이터를 모델링하고 Cypher 쿼리로 복잡한 연결 관계를 탐색한다.", tags: ["그래프", "Cypher", "관계 분석"], logo: "" },
        ]
      },
      {
        name: "클라우드 & 관리형 DB",
        tools: [
          { name: "Amazon RDS / Aurora", desc: "AWS 관리형 관계형 DB. 자동 백업·읽기 복제본·Multi-AZ 고가용성으로 운영 부담을 줄인다.", tags: ["AWS", "관리형", "고가용성"], logo: "" },
          { name: "Google BigQuery", desc: "Google Cloud 서버리스 데이터 웨어하우스. 페타바이트 쿼리를 초 단위로 처리하며 ML 기능이 내장되어 있다.", tags: ["Google Cloud", "서버리스", "데이터 웨어하우스"], logo: "" },
          { name: "Snowflake", desc: "클라우드 네이티브 데이터 플랫폼. 컴퓨팅·스토리지 분리 아키텍처로 멀티클라우드 데이터 공유를 지원한다.", tags: ["클라우드", "데이터 웨어하우스", "멀티클라우드"], logo: "" },
          { name: "Amazon DynamoDB", desc: "AWS 완전 관리형 키-값·문서 DB. 밀리초 응답과 자동 스케일링으로 서버리스 워크로드에 적합하다.", tags: ["AWS", "서버리스", "키-값"], logo: "" },
          { name: "Firebase Firestore", desc: "Google 실시간 NoSQL DB. 클라이언트 직접 연결·실시간 동기화·오프라인 지원으로 모바일 앱 백엔드로 쓰인다.", tags: ["Google", "실시간", "모바일"], logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
        ]
      },
      {
        name: "쿼리 도구 & GUI",
        tools: [
          { name: "DBeaver", desc: "모든 DB를 지원하는 무료 범용 DB 클라이언트. ERD·쿼리 편집기·데이터 내보내기를 한 곳에서 제공한다.", tags: ["무료", "범용", "오픈소스"], logo: "" },
          { name: "TablePlus", desc: "macOS/Windows 네이티브 DB GUI. 깔끔한 UI와 빠른 응답으로 개발자에게 인기가 높다.", tags: ["GUI", "macOS", "유료"], logo: "" },
          { name: "DataGrip", desc: "JetBrains DB IDE. 스마트 SQL 완성·ERD·쿼리 최적화 힌트를 제공한다.", tags: ["JetBrains", "IDE", "유료"], logo: "" },
          { name: "pgAdmin", desc: "PostgreSQL 공식 웹/데스크톱 관리 도구. 쿼리 툴·백업·슬로우 쿼리 분석을 무료로 사용한다.", tags: ["PostgreSQL", "무료", "공식"], logo: "" },
          { name: "Redis Insight", desc: "Redis 공식 GUI. 키 탐색·CLI·메모리 분석·슬로우 로그를 시각적으로 관리한다.", tags: ["Redis", "무료", "공식"], logo: "" },
        ]
      },
      {
        name: "성능 분석 & 모니터링",
        tools: [
          { name: "EXPLAIN / EXPLAIN ANALYZE", desc: "SQL 실행 계획 분석 명령. 쿼리 비용·인덱스 사용·조인 방식을 파악하여 쿼리를 튜닝한다.", tags: ["SQL", "쿼리 튜닝", "필수"], logo: "" },
          { name: "pgBadger", desc: "PostgreSQL 슬로우 쿼리 로그 분석기. HTML 리포트로 쿼리 빈도·평균 실행 시간·락 정보를 시각화한다.", tags: ["PostgreSQL", "로그 분석", "오픈소스"], logo: "" },
          { name: "Percona Monitoring (PMM)", desc: "MySQL·PostgreSQL·MongoDB 통합 모니터링 플랫폼. QAN·Grafana 대시보드로 DB 성능을 실시간 분석한다.", tags: ["모니터링", "오픈소스", "멀티 DB"], logo: "" },
          { name: "pt-query-digest", desc: "Percona Toolkit MySQL 슬로우 쿼리 분석 도구. 실행 빈도·합산 시간·공분산으로 쿼리를 우선순위화한다.", tags: ["MySQL", "슬로우 쿼리", "CLI"], logo: "" },
          { name: "Prometheus + Grafana", desc: "메트릭 수집·알림·시각화 오픈소스 조합. DB exporter를 붙여 연결 수·캐시 히트·복제 지연을 관찰한다.", tags: ["모니터링", "시계열", "오픈소스"], logo: "" },
        ]
      },
      {
        name: "마이그레이션 & 백업",
        tools: [
          { name: "Flyway", desc: "SQL 파일 기반 DB 스키마 버전 관리 도구. 버전 번호를 붙인 마이그레이션 스크립트를 자동으로 순서대로 실행한다.", tags: ["마이그레이션", "버전 관리", "오픈소스"], logo: "" },
          { name: "Liquibase", desc: "XML·YAML·SQL로 DB 변경을 추적하는 마이그레이션 도구. 롤백·변경 이력·다중 DB 지원이 강점이다.", tags: ["마이그레이션", "롤백", "다중 DB"], logo: "" },
          { name: "pg_dump / pg_restore", desc: "PostgreSQL 공식 백업 도구. 논리 백업으로 테이블·스키마 단위 내보내기·복원을 수행한다.", tags: ["PostgreSQL", "백업", "CLI"], logo: "" },
          { name: "AWS DMS", desc: "AWS 데이터베이스 마이그레이션 서비스. 이기종 DB 간 온라인 마이그레이션과 CDC 복제를 지원한다.", tags: ["AWS", "마이그레이션", "CDC"], logo: "" },
          { name: "Debezium", desc: "CDC(변경 데이터 캡처) 오픈소스 플랫폼. DB 트랜잭션 로그를 읽어 Kafka로 실시간 변경 이벤트를 스트리밍한다.", tags: ["CDC", "Kafka", "실시간"], logo: "" },
        ]
      },
      {
        name: "벡터 DB",
        tools: [
          { name: "Pinecone", desc: "완전 관리형 벡터 DB 클라우드 서비스. ANN 검색으로 AI 임베딩·RAG 시스템의 유사도 검색을 처리한다.", tags: ["벡터 검색", "관리형", "RAG"], logo: "" },
          { name: "Weaviate", desc: "오픈소스 벡터 DB. 모듈식 구조로 텍스트·이미지·멀티모달 벡터를 하이브리드 검색으로 처리한다.", tags: ["오픈소스", "벡터 검색", "멀티모달"], logo: "" },
          { name: "pgvector", desc: "PostgreSQL 벡터 유사도 검색 확장. 기존 PostgreSQL에 ANN 인덱스를 추가해 LLM 임베딩을 저장·검색한다.", tags: ["PostgreSQL", "벡터 검색", "확장"], logo: "" },
          { name: "Chroma", desc: "Python 우선 임베딩 DB. LangChain·LlamaIndex와 간편하게 연동되어 로컬 RAG 프로토타입에 자주 쓰인다.", tags: ["Python", "로컬", "RAG"], logo: "" },
        ]
      }
    ]
  }
};
