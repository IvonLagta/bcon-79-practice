// TODO: Get posts info
// console.log(posts);

const postContainer = document.querySelector(".cards");

function render(post = []) {
  if (post.length === 0) {
    return;
  }
  const markup = posts.map(
    ({
      id,
      title,
      reactions: { likes, dislikes },
    }) => `<li class="card border-dark mb-3" data-userid="121">
    <img src="${coverImage}"
            <div class="card-body">
              <h5 class="card-title">His mother had always taught him</h5>
              <hr />
              <div class="card-meta mb-3">
                <div class="card-meta-tags">
                  <p class="m-0 text-black-50 fw-lighter">
                    <i class="bi bi-tag"></i>
                  </p>
                  <ul class="tags-list">
                    <li
                      class="border border-dark rounded-1 text-center text-black-50 fw-lighter"
                    >
                      <small>history</small>
                    </li>
                    <li
                      class="border border-dark rounded-1 text-center text-black-50 fw-lighter"
                    >
                      <small>american</small>
                    </li>
                    <li
                      class="border border-dark rounded-1 text-center text-black-50 fw-lighter"
                    >
                      <small>crime</small>
                    </li>
                  </ul>
                </div>

                <ul class="card-meta-likes">
                  <li class="text-black-50 fw-lighter">
                    <i class="bi bi-hand-thumbs-up"></i> <small>192</small>
                  </li>
                  <li class="text-black-50 fw-lighter">
                    <i class="bi bi-hand-thumbs-down"></i> <small>25</small>
                  </li>
                </ul>

                <p class="card-meta-views m-0 text-black-50 fw-lighter">
                  <i class="bi bi-eye"></i> <small>305</small>
                </p>
              </div>
              <hr />
              <p class="card-text">
                ${body}
              </p>
            </div>
          </li>`
  );
}

function createTags(tags = []) {
  return tags.map();
}
