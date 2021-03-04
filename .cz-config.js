'use strict';

module.exports = {
  types: [
    {value: 'feat',     name: 'feat:     新功能'},
    {value: 'fix',      name: 'fix:      修复'},
    {value: 'docs',     name: 'docs:     文档变更'},
    {value: 'test',     name: 'test:     增加测试'},
    {value: 'build',    name: 'build:    打包'}
  ],
  // override the messages, defaults are as follows
  messages: {
    type: '请选择提交类型:',
    customScope: '请输入修改范围(可选):',
    subject: '请简要描述提交(必填):',
    body: '请输入详细描述(可选，待优化去除，跳过即可):',
    footer: '请输入要关闭的issue(待优化去除，跳过即可):',
    confirmCommit: '确认使用以上信息提交？(y/n/e/h)'
  },
  allowCustomScopes: true,
  // allowBreakingChanges: ['feat', 'fix'],
  skipQuestions: ['body', 'footer'],
  // limit subject length, commitlint默认是72
  subjectLimit: 72
};
