const containerEl = document.getElementById('comment-container');

const clickHandler = async (event) => {
event.preventDefault();

const post_id = document.querySelector("#post-id").value.trim();
const comment_text = document.querySelector("#comment-input").value.trim();
  
if (event.target.matches('button')) {
    const response = await fetch(`/api/comments`, {
        method: "POST",
        body: JSON.stringify({ comment_text, post_id }),
        headers: {
          "Content-Type": "application/json",
        },
    });
  
if (response.ok) {
        document.location.reload();
        } else {
            alert("Failed to create comment");
        }
    }
};
