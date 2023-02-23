// Create fetch request for comment POST route
const submitBtn = document.getElementById('submit-btn');

const clickHandler = async (event) => {
    event.preventDefault();

    // Split url at every /
    const url = location.href.split("/")
    // Grab last index of array (i.e. post number)
    const post_id = url[url.length - 1];
    const comment_text = document.querySelector("#comment-input").value.trim();

    if (comment_text) {
        const response = await fetch(`/api/comments`, {
            method: "POST",
            body: JSON.stringify({ comment_text, post_id }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result = await response.json()
        console.log(result)

        if (response.ok) {
            document.location.reload();
        } else {
            alert("Failed to create comment");
        }
    }
};

submitBtn.addEventListener('submit', clickHandler);
