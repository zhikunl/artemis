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

/** zh-CN entries for the agent activity stream component. */
export const agentStream: Record<string, string> = {
  // Navigation header and dropdowns
  'Task Queue': '任务队列',
  'Notes & Plans': '笔记与计划',
  'Active Queue ({count})': '当前队列 ({count})',
  'No active or queued tasks': '暂无进行中或排队中的任务',
  'Device: {id}': '设备:{id}',
  'Stop this task': '停止此任务',
  'Delete this task': '删除此任务',
  'Unnamed Task': '未命名任务',
  'ID: {id}': 'ID:{id}',
  'Past Runs & History ({count})': '历史运行与记录 ({count})',
  'No past task history': '暂无历史任务',
  'No notes available for this session.': '此会话暂无可用笔记。',

  // Task status words (rendered through | uppercase)
  'running': '运行中',
  'paused': '已暂停',
  'pending': '排队中',
  'completed': '已完成',
  'failed': '失败',
  'cancelled': '已取消',

  // Run info popover
  'Architecture:': '架构:',
  'Run info': '运行信息',
  'Elapsed': '用时',
  'Tokens': 'Token 用量',
  '{p} in · {c} out': '输入 {p} · 输出 {c}',
  'Context': '上下文',
  'of {n}': '/ {n}',
  'Result check': '结果检查',
  'Screen reading': '屏幕读取',
  'No extra settings for Flash.': 'Flash 无额外设置。',

  // Screen recording button (titles and button text)
  'Task is currently running (Recording screen)': '任务正在运行 (正在录屏)',
  'Preparing screen recording...': '正在准备录屏...',
  'Play Screen Recording Video': '播放录屏视频',
  'Video recording failed — Click to replay step-by-step screenshots':
    '视频录制失败 — 点击回放分步截图',
  'Play step-by-step screenshots replay': '播放分步截图回放',
  'Screen recording generation failed': '录屏生成失败',
  'Screen Recording': '屏幕录制',
  'Recording...': '录制中...',
  'Preparing...': '准备中...',
  'Play Recording': '播放录屏',
  'Step Replay': '分步回放',
  'Recording Failed': '录制失败',

  // Stream body
  'Loading run history...': '正在加载运行记录...',
  'No Stream Activity Selected': '未选择任何流活动',
  'Please select a session from the Task List on the right to view its real-time log payloads.':
    '请从右侧的任务列表中选择一个会话,查看其实时日志内容。',
  'Worked for {n}s': '已工作 {n} 秒',
  'Task startup progress': '任务启动进度',
  'Waiting {elapsed}': '等待 {elapsed}',
  'Waited {elapsed}': '已等待 {elapsed}',
  'Checked for {n}s': '已检查 {n} 秒',

  // Startup stage fallbacks (plain TS)
  'Android device connected': 'Android 设备已连接',
  'UI hierarchy service is ready': 'UI 层级服务已就绪',
  'Device environment is ready': '设备环境已就绪',

  // Check lane (verifier)
  'Final check': '最终检查',
  'Result': '结果',
  'Check': '检查',
  'Thought': '思考',
  'Work': '工作',
  'Test assertion': '测试断言',
  'Must pass': '必须通过',
  'at the end': '在结束时',
  'Passed': '已通过',
  'Failed': '失败',
  'Could not be confirmed': '无法确认',
  'Superseded by a newer check': '已被更新的检查取代',
  'Not checked': '未检查',
  'Not finished yet: {text}': '尚未完成:{text}',
  'The step was sent back to be redone.': '该步骤已退回重做。',
  'Goal completed': '目标已完成',
  'Blocked': '已阻断',
  'Partially completed': '部分完成',
  '{count} passed': '{count} 项通过',
  '{count} failed': '{count} 项失败',
  '{count} inconclusive': '{count} 项无法确定',
  '{count} not checked': '{count} 项未检查',
  'Checking…': '正在检查…',
  'Superseded': '已取代',
  'No verdict': '无判定',
  'Inconclusive': '无法确定',
  'Done': '完成',

  // Task report card
  'Task Execution Failed': '任务执行失败',
  'Task Completed': '任务已完成',
  'Completed': '已完成',
  'Summary:': '摘要:',
  'Report & Findings': '报告与发现',
  'Final Verified State': '最终验证状态',
  'Final Screen Screenshot': '最终界面截图',
  'Post Verification': '验证后',
  'Post Screenshot': '验证后截图',

  // Action / tool cards
  'Target:': '目标:',
  'Coordinates:': '坐标:',
  'Target': '目标',
  'Coordinates': '坐标',
  'Target Bounds': '目标边界',
  'Target Class': '目标类',
  'Action': '操作',
  'Pre-Action (Before)': '操作前',
  'Post-Action (After)': '操作后',
  'Pre-Action Screenshot': '操作前截图',
  'Post-Action Screenshot': '操作后截图',
  'Command:': '命令:',
  'Cwd:': '工作目录:',
  'Terminal ID:': '终端 ID:',
  'Analysis:': '分析:',
  'Details:': '详情:',
  'Command': '命令',
  'Working Directory': '工作目录',
  'Terminal ID': '终端 ID',
  'Analysis': '分析',
  'Details': '详情',
  'Tool': '工具',

  // LLM retries and failures
  'LLM temporarily unavailable': 'LLM 暂时不可用',
  '· Retrying in {delay}…': '· 将在 {delay} 后重试…',
  'Frequent retries may indicate a low API rate limit. Consider increasing the limit or reducing request concurrency.':
    '频繁重试可能表明 API 速率限制过低。请考虑提高限额或降低请求并发。',
  'Retrying LLM request · Waited {t}': '正在重试 LLM 请求 · 已等待 {t}',
  'LLM Request Failed': 'LLM 请求失败',
  'Paused': '已暂停',
  'What happened:': '发生了什么:',
  'The AI request could not be completed after automatic retries.': '自动重试后仍无法完成该 AI 请求。',
  'Failure reason:': '失败原因:',
  'Waited:': '已等待:',
  'Retry details': '重试详情',
  'Retry {n}': '第 {n} 次重试',
  'Planned {delay} · Waited {waited}': '计划 {delay} · 已等待 {waited}',
  'Continue the paused task': '继续已暂停的任务',
  'Continue task': '继续任务',
  'Task paused · no steps are running': '任务已暂停 · 没有正在执行的步骤',
  'The AI provider did not return error details after the request failed.':
    'AI 服务提供商在请求失败后未返回错误详情。',
  'UI hierarchy source changed': 'UI 层级数据源已切换',

  // Tool pills and video analysis
  'Click to view note content': '点击查看笔记内容',
  'Open recording at {time}': '在 {time} 打开录屏',
  'Analyzing screen recording': '正在分析屏幕录制',
  'Screen recording': '屏幕录制',
  '{count}/{total} segments saved': '已保存 {count}/{total} 段',

  // Synthesis card
  'Task Report': '任务报告',
  'View in Notes': '在笔记中查看',

  // Planning loader phrases
  'Planning next step...': '正在规划下一步...',
  'Analyzing screen coordinates...': '正在分析屏幕坐标...',
  'Consulting neural network...': '正在咨询神经网络...',
  'Formulating tactical action plan...': '正在制定战术行动计划...',
  'Deciphering UI state & elements...': '正在解读 UI 状态与元素...',
  'Synthesizing decision pathways...': '正在综合决策路径...',
  'Calibrating next move...': '正在校准下一步操作...',
  'Aligning logical vectors...': '正在对齐逻辑向量...',
  'Evaluating optimal sub-goals...': '正在评估最优子目标...',
  'Gathering sensory inputs...': '正在收集感知输入...',
  'Computing next interaction...': '正在计算下一次交互...',
  'Optimizing execution strategy...': '正在优化执行策略...',
  'Simulating probable outcomes...': '正在模拟可能的结果...',
  'Summoning AI intuition...': '正在召唤 AI 直觉...',
  'Brewing the next command...': '正在酝酿下一条命令...',
  'Strategizing tactical moves...': '正在谋划战术行动...',

  // Image zoom modal
  'Close image preview': '关闭图片预览',
  'Zoomed Screenshot': '放大后的截图',

  // Status labels (plain TS)
  'Idle': '空闲',
  'Running': '运行中',
  'Offline': '离线',

  // Architecture / token tooltips (plain TS)
  'Agent Architecture: ARTEMIS Flash (Reactive Fast Loop)': '智能体架构:ARTEMIS Flash (反应式快速循环)',
  'ARTEMIS Pro (Multi-Agent Cognitive State Graph)': 'ARTEMIS Pro (多智能体认知状态图)',
  'ARTEMIS Flash (Reactive Fast Loop)': 'ARTEMIS Flash (反应式快速循环)',
  'Agent Architecture: {arch} · LLM: {model} ({provider})': '智能体架构:{arch} · LLM:{model} ({provider})',
  'Agent Architecture: {arch}': '智能体架构:{arch}',
  'Consumed: {n} tokens ({p} in / {c} out)': '已消耗:{n} 个 token (输入 {p} / 输出 {c})',
  'Consumed: {n} tokens': '已消耗:{n} 个 token',
  'Are you sure you want to delete this task? This cannot be undone.': '确定要删除此任务吗?此操作无法撤销。',
};
