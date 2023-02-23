// TODO: debug post UPDATE functionality
// Create fetch request for post UPDATE route
const updateBtnHandler = async (event) => {
  event.preventDefault();
  console.log('Listening')

  const title = document.querySelector('#post-title').value.trim();
  const content = document.querySelector('#post-content').value.trim();
  console.log(event.target)
  if (event.target.hasAttribute('data-id')) {

    const id = event.target.getAttribute('data-id');
    console.log(id)
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });


    const result = await response.json()
    console.log(result)

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to update post');
    }
  }
};

document
  .querySelector('.update-post-form')
  .addEventListener('submit', updateBtnHandler);