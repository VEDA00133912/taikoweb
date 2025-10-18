function uploadFiles() {
  const errorView = document.querySelector("#error-view");
  errorView.textContent = "";

  fetch("/api/csrftoken")
    .then((response) => {
      if (!response.ok) {
        throw new Error("CSRFトークンの取得に失敗しました");
      }
      return response.json();
    })
    .then((tokenData) => {
      const csrfToken = tokenData.token;

      const form = document.querySelector("#upload-form");
      const formData = new FormData(form);

      return fetch("/api/upload", {
        method: "POST",
        body: formData,
        headers: {
          "X-CSRF-TOKEN": csrfToken,
        },
      });
    })
    .then((uploadResponse) => {
      if (!uploadResponse.ok) {
        throw new Error("/api/upload に失敗しました: " + uploadResponse.status);
      }
      return uploadResponse.json();
    })
    .then((data) => {
      if (data.success) {
        alert("おめでとう！ファイルの投稿に成功しました！");
        document.querySelector("#upload-form").reset();
      } else {
        throw new Error(data.error || "不明なエラーが発生しました");
      }
    })
    .catch((error) => {
      console.error("エラー:", error);
      document.querySelector("#error-view").textContent = error.message;
    });
}
