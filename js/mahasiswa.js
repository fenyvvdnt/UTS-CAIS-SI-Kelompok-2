const dataMahasiswa = [
    { nim: "11523026", nama: "Tesa Sulistia", prodi: "Sistem Informasi", semester: 5, status: "Aktif" },
    { nim: "11523014", nama: "Feny Widianti", prodi: "Sistem Informasi", semester: 5, status: "Aktif" },
    { nim: "11523008", nama: "Azra Deliana Pratiwi", prodi: "Sistem Informasi", semester: 5, status: "Aktif" },
    { nim: "11523031", nama: "Muhammad Faiz Hanifah", prodi: "Sistem Informasi", semester: 5, status: "Aktif" }
];

const tbody = document.getElementById("mahasiswaBody");
const searchInput = document.getElementById("searchInput");

function renderTabel(data) {
    tbody.innerHTML = "";
    data.forEach((mhs, index) => {
        const row = `
            <tr>
                <td>${index + 1}</td>
                <td>${mhs.nim}</td>
                <td>${mhs.nama}</td>
                <td>${mhs.prodi}</td>
                <td>${mhs.semester}</td>
                <td><span class="badge-aktif">${mhs.status}</span></td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

searchInput.addEventListener("input", function () {
    const keyword = this.value.toLowerCase();
    const filtered = dataMahasiswa.filter(mhs =>
        mhs.nama.toLowerCase().includes(keyword) || mhs.nim.includes(keyword)
    );
    renderTabel(filtered);
});

renderTabel(dataMahasiswa);