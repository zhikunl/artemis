/**
 * Copyright 2026 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** zh-CN entries for the home page (system setup guide + task launcher). */
export const home: Record<string, string> = {
  // Hero & top-level tabs
  'What would you like to do on your phone?': '你想在手机上做什么？',
  'System Setup & Prerequisites': '系统设置与前置条件',
  'Launch Autonomous Task': '启动自主任务',

  // Step 1: System & Environment
  'System & Environment': '系统与环境',
  'Core tools, Android debug bridge, and video recording runtime':
    '核心工具、Android 调试桥与视频录制运行时',
  'Re-check all system dependencies': '重新检查所有系统依赖',
  'Checking...': '检查中…',
  'Re-check': '重新检查',
  'Automated Dependency Setup': '自动化依赖安装',
  'Run in terminal to install ADB, FFmpeg, scrcpy, and project dependencies:':
    '在终端中运行即可安装 ADB、FFmpeg、scrcpy 及项目依赖：',
  'Copy': '复制',
  'Copied!': '已复制!',
  'Python Runtime': 'Python 运行时',
  'Checking…': '检查中…',
  // SDK package name, kept verbatim.
  'Android Platform-Tools': 'Android Platform-Tools',
  'ADB Installed': 'ADB 已安装',
  'ADB Missing': 'ADB 缺失',
  'System Configuration': '系统配置',
  'Config Valid': '配置有效',
  'Video Toolchain': '视频工具链',
  'FFmpeg & scrcpy': 'FFmpeg 与 scrcpy',

  // Step 2: AI Model Setup
  'AI Model Setup': 'AI 模型设置',
  'Google Gemini or custom LLM providers (OpenAI, Claude, Ollama)':
    'Google Gemini 或自定义 LLM 提供商（OpenAI、Claude、Ollama）',
  'Recommended': '推荐',
  'Fast multimodal reasoning with free API key from Google AI Studio.':
    '快速多模态推理，可在 Google AI Studio 免费获取 API 密钥。',
  'Custom Configuration': '自定义配置',
  // Split around inline <code> file names.
  'Define models in': '在',
  '& keys in': '中定义模型，并在',
  '(OpenAI, Claude, Ollama).': '中配置密钥（支持 OpenAI、Claude、Ollama）。',
  'Enter Gemini API Key:': '输入 Gemini API 密钥：',
  'Get Free API Key (Google AI Studio)': '获取免费 API 密钥（Google AI Studio）',
  'Enter Gemini API Key (e.g. AIzaSy...)': '输入 Gemini API 密钥（如 AIzaSy...）',
  'Mask Key': '隐藏密钥',
  'Show Plaintext': '显示明文',
  'Copy API Key': '复制 API 密钥',
  'Verifying & Saving...': '验证并保存…',
  'Clearing...': '正在清除…',
  'Clear Key': '清除密钥',
  'Save & Apply': '保存并应用',
  'Save Key': '保存密钥',
  'Test if Gemini API key is valid': '测试 Gemini API 密钥是否有效',
  'Testing...': '测试中…',
  'Test Key': '测试密钥',
  'Optional: Google Cloud Vision OCR': '可选：Google Cloud Vision OCR',
  'OCR Configured': 'OCR 已配置',
  'Provides screen text coordinate grounding to improve element detection and interaction accuracy on text-heavy apps.':
    '提供屏幕文本坐标定位，提升文本密集型应用中的元素检测与交互准确率。',
  'Cloud Vision API Key:': 'Cloud Vision API 密钥：',
  'Enter Vision OCR API Key (e.g. AIzaSy...)': '输入 Vision OCR API 密钥（如 AIzaSy...）',
  'Test if Vision OCR key is valid': '测试 Vision OCR 密钥是否有效',

  // Custom configuration inspector
  'Active Model Configuration': '当前生效的模型配置',
  'Defined in': '定义于',
  'Copy file path': '复制文件路径',
  'Copy Path': '复制路径',
  'Hide JSONC': '收起 JSONC',
  'View JSONC': '查看 JSONC',
  'Default Model': '默认模型',
  'Fallback Model': '备用模型',
  'Environment Variables & API Keys': '环境变量与 API 密钥',
  'Loaded from': '加载自',
  'Configured': '已配置',
  'Not Set': '未设置',

  // Step 3: Android Device & Emulator Connection
  'Android Device & Emulator Connection': 'Android 设备与模拟器连接',
  'Local emulator, attached phone, wireless device, or another ADB server':
    '本地模拟器、已连接的手机、无线设备或其他 ADB 服务器',
  'Hide Options': '收起选项',
  'Change Connection': '更改连接方式',
  'Refresh devices without stopping the remote ADB server': '刷新设备而不停止远程 ADB 服务器',
  'Restart local ADB daemon': '重启本地 ADB 守护进程',
  'Restarting...': '正在重启…',
  'Devices Refreshed ✓': '设备已刷新 ✓',
  'ADB Refreshed ✓': 'ADB 已刷新 ✓',
  'Restart Failed': '重启失败',
  'Refresh Devices': '刷新设备',
  'Restart ADB': '重启 ADB',
  'Virtual Device': '虚拟设备',
  'Remote via {host}:{port}': '远程：{host}:{port}',
  'Connected': '已连接',
  'Select Active Device:': '选择当前设备：',
  '✓ Active': '✓ 使用中',

  // Emulator boot tracker
  'Launching Android Emulator:': '正在启动 Android 模拟器：',
  'OS Booting': '系统启动中',
  'Starting': '启动中',
  'Initializing Android Virtual Device...': '正在初始化 Android 虚拟设备…',
  'Hide Logs': '隐藏日志',
  'View Boot Logs': '查看启动日志',
  'Terminate emulator process': '终止模拟器进程',
  'Stop': '停止',
  '1. Process Start': '1. 进程启动',
  '2. ADB Handshake': '2. ADB 握手',
  '3. Android OS Boot': '3. Android 系统启动',
  '4. Ready': '4. 就绪',
  '{p}% Complete': '已完成 {p}%',
  'Elapsed: {s}s': '已用时 {s} 秒',
  'Android virtualization cold boot usually takes 20-45 seconds. Live progress is actively tracked above—please do not click launch repeatedly.':
    'Android 虚拟化冷启动通常需要 20-45 秒。上方会实时跟踪进度，请勿反复点击启动。',
  'Emulator Console Stream (stdout / stderr)': '模拟器控制台输出（stdout / stderr）',
  'Copied': '已复制',
  'Copy Logs': '复制日志',
  'Waiting for process output...': '等待进程输出…',

  // Emulator launch failed card
  'Emulator Launch Failed': '模拟器启动失败',
  'The Android emulator process failed to start or crashed during initialization.':
    'Android 模拟器进程启动失败或在初始化期间崩溃。',
  'Dismiss error': '关闭错误提示',
  'Process Output / Failure Logs:': '进程输出 / 失败日志：',
  'Retry Launch ({avd})': '重试启动（{avd}）',
  'Restart ADB Server': '重启 ADB 服务器',
  'Dismiss': '关闭',

  // Connection method cards
  'Android Emulator': 'Android 模拟器',
  '{n} local virtual devices available': '{n} 个本地虚拟设备可用',
  '{n} local virtual device available': '{n} 个本地虚拟设备可用',
  'Launch a local Android Virtual Device': '启动本地 Android 虚拟设备',
  'USB Cable': 'USB 数据线',
  'Connect physical phone via USB': '通过 USB 连接实体手机',
  'Wireless ADB': '无线 ADB',
  'Connect over local Wi-Fi': '通过本地 Wi-Fi 连接',
  'Remote Computer': '远程电脑',
  'Phone connected to another computer': '手机连接在另一台电脑上',
  'Artemis is currently using': 'Artemis 当前正在使用',
  '. Switch to local ADB before using a local emulator, USB cable, or Wireless ADB.':
    '。请先切换到本地 ADB，再使用本地模拟器、USB 数据线或无线 ADB。',
  'Switching...': '正在切换…',
  'Use Local ADB': '使用本地 ADB',

  // Emulator method
  'Installed Virtual Devices (AVD)': '已安装的虚拟设备（AVD）',
  '{n} Available': '{n} 个可用',
  'An emulator is currently launching...': '模拟器正在启动…',
  'Launch {avd}': '启动 {avd}',
  'Booting OS': '系统启动中',
  'Launch': '启动',
  'No Android Virtual Devices (AVD) Detected': '未检测到 Android 虚拟设备（AVD）',
  'Follow the step-by-step instructions below to install and start an emulator:':
    '请按照以下分步说明安装并启动模拟器：',
  'Android Studio (GUI)': 'Android Studio（图形界面）',
  'Command Line (CLI)': '命令行（CLI）',
  'Install Android Studio': '安装 Android Studio',
  'Download for {os} from': '下载 {os} 版本，访问',
  'and install.': '并安装。',
  'Open Device Manager': '打开 Device Manager',
  // Split around inline <strong> Studio menu names (kept verbatim).
  'On Studio welcome screen, open': '在 Studio 欢迎页打开',
  '(or': '（或',
  ').': '）。',
  'Create Virtual Device': '创建虚拟设备',
  'Click': '点击',
  ', choose': '，选择',
  ', select': '，选中',
  ', and click': '，然后点击',
  '.': '。',
  'Launch Emulator': '启动模拟器',
  'Click ▶': '点击 ▶',
  'in Device Manager. Artemis will detect and connect to it automatically!':
    '（位于 Device Manager）。Artemis 会自动检测并连接它！',

  // CLI emulator setup steps (titles/descriptions come from the component)
  'Enable Windows Hypervisor Platform (WHPX)': '启用 Windows Hypervisor Platform（WHPX）',
  'Verify macOS Hypervisor / Install Tools': '验证 macOS Hypervisor / 安装工具',
  'Enable KVM Hardware Acceleration (Linux)': '启用 KVM 硬件加速（Linux）',
  'Enable Windows Hypervisor Platform in PowerShell (Run as Administrator):':
    '在 PowerShell 中启用 Windows Hypervisor Platform（以管理员身份运行）：',
  'macOS uses native Hypervisor.framework. Install SDK tools via Homebrew (or Studio):':
    'macOS 使用原生 Hypervisor.framework。通过 Homebrew（或 Studio）安装 SDK 工具：',
  'Ensure virtualization permissions are granted to your user account:':
    '请确保你的用户账户已获得虚拟化权限：',
  'Download Emulator & System Image (API 34)': '下载模拟器与系统镜像（API 34）',
  'Install Android 14 Google APIs system image using SDK Manager:':
    '使用 SDK Manager 安装 Android 14 Google APIs 系统镜像：',
  'Create Virtual Device (Pixel 8 AVD)': '创建虚拟设备（Pixel 8 AVD）',
  'Initialize a new Android Virtual Device named': '初始化名为',
  'Start the Emulator': '启动模拟器',
  'Launch the virtual device (or add': '启动虚拟设备（或添加',
  'for headless execution):': '以无头模式运行）：',

  // USB method
  'Connect your Android phone via USB cable and enable USB Debugging:':
    '通过 USB 数据线连接 Android 手机并启用 USB 调试：',
  'Connect USB Cable': '连接 USB 数据线',
  'Plug your Android phone into this computer with a data cable.':
    '用数据线将 Android 手机连接到这台电脑。',
  'Enable Developer Options': '启用开发者选项',
  // Split around inline <strong> phone menu names (kept verbatim).
  'In phone': '在手机的',
  ', tap': '菜单中，连点',
  '7 times.': '7 次。',
  'Enable USB Debugging': '启用 USB 调试',
  'In': '在',
  ', turn': '中，将',
  'ON.': '打开。',
  'Authorize Computer': '授权这台电脑',
  'Check': '勾选',
  'and tap': '，并在手机弹窗中点击',
  ' on the phone prompt.': '。',

  // Wireless ADB method
  'Connect your phone and computer on the same Wi-Fi network:':
    '将手机与电脑连接到同一 Wi-Fi 网络：',
  'Device IP Address': '设备 IP 地址',
  'e.g. 192.168.1.108': '例如 192.168.1.108',
  'Port': '端口',
  'Connecting...': '正在连接…',
  'Connect': '连接',
  'Find IP & port in phone': '在手机的以下位置查看 IP 与端口：',

  // Remote ADB server method
  'Enter the host and port of an ADB server endpoint that this computer can access, so Artemis can discover and control a phone physically connected to another computer.':
    '输入这台电脑可访问的 ADB 服务器端点的主机名和端口，Artemis 即可发现并控制连接在另一台电脑上的手机。',
  'ADB Server Host': 'ADB 服务器主机',
  'ADB Server Port': 'ADB 服务器端口',
  'Test Connection': '测试连接',
  'Remember this endpoint for future Artemis launches': '记住该端点，供后续启动 Artemis 时使用',
  'Ready': '就绪',
  'Use Connection': '使用该连接',
  'Use Anyway': '仍要使用',
  'Artemis sends all ADB commands to this server instead of the default local server. Any phone visible to that server becomes available to Artemis.':
    'Artemis 会将所有 ADB 命令发送到该服务器，而非默认的本地服务器。该服务器可见的任何手机都可供 Artemis 使用。',

  // Device lock / authorization states
  'Device Is Locked': '设备已锁定',
  'Unable to Verify Lock State': '无法确认锁定状态',
  'Check Again': '重新检查',
  'USB Debugging Authorization Pending': '等待 USB 调试授权',
  'Your Android device was detected, but it requires authorization. Please unlock your phone screen and tap':
    '已检测到你的 Android 设备，但需要授权。请解锁手机屏幕并点击',
  'Restart ADB & Check': '重启 ADB 并检查',

  // ADB missing panel
  'Android Platform Tools (adb) not found.': '未找到 Android Platform Tools（adb）。',
  'Please install ADB on your operating system:': '请在你的操作系统中安装 ADB：',
  'Linux (Ubuntu / Debian)': 'Linux（Ubuntu / Debian）',
  'macOS (Homebrew)': 'macOS（Homebrew）',
  'Windows (WinGet)': 'Windows（WinGet）',
  'Detected': '当前系统',

  // Ready banner
  'System Ready for Autonomous Tasks': '系统已就绪，可执行自主任务',
  'All dependencies, AI model credentials, and Android device are verified and ready to run.':
    '所有依赖、AI 模型凭据与 Android 设备均已验证，随时可以运行。',

  // Task launcher
  'Android device is locked. Unlock it and enter the home screen before running a task.':
    'Android 设备已锁定。请先解锁并进入主屏幕，再运行任务。',
  'Prerequisites incomplete: runtime, credentials, or Android device is not ready. Click here to open Setup Guide.':
    '前置条件未完成：运行时、凭据或 Android 设备未就绪。点击此处打开设置向导。',
  'Continuous monitoring or complex task detected. Recommended:': '检测到持续监控或复杂任务。推荐：',
  'Pro Mode': 'Pro 模式',
  'Switch to Pro': '切换到 Pro',
  'Describe what you want to achieve on your phone (e.g. Open Gmail and search for latest emails)...':
    '描述你想在手机上完成的事情（例如：打开 Gmail 并搜索最新邮件）...',
  // Split around inline <strong> timing chips.
  'Token-efficient, rapid': '节省 Token、快速',
  'decisions straight from the live screen. Best for everyday tasks with a clear path, however long they run.':
    '决策，直接基于实时屏幕。最适合路径清晰的日常任务，无论运行多久。',
  '(No plan, no result check, no ADB commands)': '（无规划、无结果校验、无 ADB 命令）',
  'Plans first, checks its results and recovers when a tap is blocked. Handles':
    '先规划，再校验结果，点击受阻时会自动恢复。可处理',
  'workflows and live phone monitoring (': '工作流与手机实时监控（',
  ' / step).': ' / 步）。',
  // Same tooltip strings as the workspace page.
  'Flash: fast single-look loop for everyday app tasks (3–5s/step)':
    'Flash：快速单步执行循环，适合日常应用任务（每步 3–5 秒）',
  'Pro: plans first, checks results and recovers from blocked steps. For long or complex tasks (15–40s/step)':
    'Pro：先制定计划，会校验结果并从受阻步骤中恢复，适合长周期或复杂任务（每步 15–40 秒）',
  '{n} chars': '{n} 个字符',
  'Unlock the Android device before running': '请先解锁 Android 设备再运行',
  'Complete System Setup before running': '运行前请先完成系统设置',
  'Run task': '运行任务',
  'Starting...': '正在启动…',
  'Run Task': '运行任务',

  // Expected output card
  'Expected Output': '期望输出',
  '(Optional)': '（可选）',
  'Specify expected output or schema (e.g. \'Extract SMS verification code as JSON\' or \'Summary of discounts and total price\')...':
    '指定期望输出或格式（例如“以 JSON 提取短信验证码”或“优惠与总价汇总”）...',
  'Clear expected output': '清除期望输出',

  // Pro tuning sliders (names/ends/labels; long hover-card copy stays English for now)
  'Pro settings': 'Pro 设置',
  'Back to the defaults': '恢复默认值',
  'Reset': '重置',
  'Result check': '结果校验',
  'Screen reading': '屏幕读取',
  'Off': '关闭',
  'Strict': '严格',
  'Faster': '更快',
  'Sharper': '更清晰',
  'At the end': '结束时',
  'Every step': '每一步',
  'Quick glance': '快速一瞥',
  'Second look': '二次查看',
  'Close-up': '放大细看',
  'What happens': '会发生什么',
  'Not included': '不包含',
  'Use it for': '适用场景',

  // Recommended tasks hub
  'Recommended Tasks': '推荐任务',
  'All': '全部',
  'Multi-App': '多应用',
  'Monitor': '监控',
  'Discover more tasks': '发现更多任务',
  'Shuffle': '换一批',
  'Uses ARTEMIS Pro (Multi-Agent Cognitive State Graph)': '使用 ARTEMIS Pro（多智能体认知状态图）',
  'Uses ARTEMIS Flash (Reactive Fast Loop)': '使用 ARTEMIS Flash（反应式快速循环）',
  'Use': '使用',

  // Component-side feedback strings (formatMsg in home.component.ts)
  '✓ Gemini API key verified & saved successfully.': '✓ Gemini API 密钥验证并保存成功。',
  'Failed to update Gemini API key.': '更新 Gemini API 密钥失败。',
  '✓ Gemini API key cleared.': '✓ Gemini API 密钥已清除。',
  'Failed to clear Gemini API key.': '清除 Gemini API 密钥失败。',
  '✓ Vision OCR API key verified & saved.': '✓ Vision OCR API 密钥验证并保存成功。',
  'Failed to update Vision OCR key.': '更新 Vision OCR 密钥失败。',
  '✓ Vision OCR API key cleared.': '✓ Vision OCR API 密钥已清除。',
  'Failed to clear Vision OCR key.': '清除 Vision OCR 密钥失败。',
  '✓ Gemini API key is valid!': '✓ Gemini API 密钥有效！',
  'Gemini API key verification failed.': 'Gemini API 密钥验证失败。',
  'Gemini API key test failed.': 'Gemini API 密钥测试失败。',
  '✓ Vision OCR API key is valid!': '✓ Vision OCR API 密钥有效！',
  'Vision OCR API key verification failed.': 'Vision OCR API 密钥验证失败。',
  'Vision OCR API key test failed.': 'Vision OCR API 密钥测试失败。',
  'Switch to local ADB before connecting a Wireless ADB device.':
    '请先切换到本地 ADB，再连接无线 ADB 设备。',
  'Please enter a valid IP address.': '请输入有效的 IP 地址。',
  'Connected to {host}:{port}!': '已连接到 {host}:{port}！',
  'Connection failed. Please check phone IP & Wi-Fi.': '连接失败，请检查手机 IP 和 Wi-Fi。',
  'Failed to connect. Please check adb connection.': '连接失败，请检查 adb 连接。',
  'Enter the host name or IP address of the ADB server.': '请输入 ADB 服务器的主机名或 IP 地址。',
  'Enter a port between 1 and 65535.': '请输入 1 到 65535 之间的端口。',
  'Unable to test the ADB server endpoint.': '无法测试该 ADB 服务器端点。',
  'Test the endpoint before using it.': '请先测试该端点再使用。',
  'Unable to use the ADB server endpoint.': '无法使用该 ADB 服务器端点。',
  'Unable to switch back to the local ADB server.': '无法切换回本地 ADB 服务器。',
  'Please enter a task goal before running.': '请先输入任务目标再运行。',
  'System prerequisites are not satisfied. Please review System Setup first.':
    '系统前置条件未满足，请先查看系统设置。',
  'Failed to submit task. Please check server connection.': '提交任务失败，请检查服务器连接。',
};
