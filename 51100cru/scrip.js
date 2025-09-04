const form = document.getElementById('plant-form');
const plantList = document.getElementById('plant-list');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('plant-name').value;
  const date = document.getElementById('water-date').value;

  addPlant(name, date);

  form.reset();
});

function addPlant(name, date) {
  const li = document.createElement('li');

  // สร้าง span แยกไว้เพื่อเปลี่ยนสไตล์ตอน Done
  const span = document.createElement('span');
  span.textContent = `${name} - 🔔 ${date}`;

  // ปุ่ม Done
  const doneButton = document.createElement('button');
  doneButton.textContent = '✅ Done';
  doneButton.style.marginRight = '10px';
  doneButton.onclick = () => {
    span.style.textDecoration = 'line-through';
    span.style.color = '#b82e5cff';
    doneButton.disabled = true; // ปิดปุ่มหลังเสร็จแล้ว
  };

  // ปุ่มลบ
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'ลบ';
  deleteButton.onclick = () => li.remove();

  li.appendChild(span);
  li.appendChild(doneButton);
  li.appendChild(deleteButton);

  plantList.appendChild(li);
}
