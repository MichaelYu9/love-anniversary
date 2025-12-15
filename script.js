// 简易回执演示 — 如需接入后端请替换为真实接口
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('rsvp-form');
  const status = document.getElementById('rsvp-status');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      attending: form.attending.value,
      message: form.message.value.trim()
    };

    // 基本前端校验
    if (!data.name || !data.email || !data.attending) {
      status.textContent = '请填写所有必填项。';
      status.style.color = '#b00020';
      return;
    }

    status.textContent = '发送中...';
    status.style.color = '#444';

    // 演示：模拟异步请求
    setTimeout(() => {
      status.textContent = `感谢，${data.name}！我们已收到您的回执。`;
      status.style.color = 'green';
      form.reset();
    }, 900);

    // 若接入服务端接口示例：
    // fetch('/api/rsvp', {method:'POST', body: JSON.stringify(data), headers:{'Content-Type':'application/json'}})
    //  .then(res=>res.json()).then(r=>{ /* 处理返回 */ }).catch(err=>{ /* 错误处理 */ });
  });
});