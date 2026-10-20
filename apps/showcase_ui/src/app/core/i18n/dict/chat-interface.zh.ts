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

/** zh-CN entries for the chat-interface (task queue / notes) component. */
export const chatInterface: Record<string, string> = {
  'Task Queue': '任务队列',
  'Notes & Plans': '笔记与计划',
  'Clear all tasks and history': '清除所有任务与历史',
  'Active Queue ({n})': '进行中的队列（{n}）',
  'No active or queued tasks.': '暂无进行中或排队等待的任务。',
  'running': '运行中',
  'paused': '已暂停',
  'pending': '排队中',
  'completed': '已完成',
  'failed': '已失败',
  'cancelled': '已取消',
  'Device: {serial}': '设备：{serial}',
  'Stop this task': '停止此任务',
  'Delete this task': '删除此任务',
  'Unnamed Task': '未命名任务',
  'ID: {id}': 'ID：{id}',
  'Past Runs & History ({n})': '历史运行与记录（{n}）',
  'No past tasks.': '暂无历史任务。',
  'No Notes & Plans': '暂无笔记与计划',
  'No notes or structured plans were recorded for this session.': '本会话未记录任何笔记或结构化计划。',
  'Are you sure you want to clear all tasks and history? This cannot be undone.':
    '确定要清除所有任务与历史吗？此操作无法撤销。',
  'Are you sure you want to delete this task? This cannot be undone.':
    '确定要删除此任务吗？此操作无法撤销。',
  'The runner is busy. Please wait for the current task to finish.':
    '执行器正忙，请等待当前任务完成。',
  'Failed to clear history.': '清除历史记录失败。',
  'Failed to delete task.': '删除任务失败。',
};
