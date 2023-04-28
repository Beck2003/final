let commentID = 1;

$(`#submit`).on(`click`, function() {
    if($('#name').val() === "") {
        alert('Pleaser enter a Username and Comment.');
        return false;
    }
    if($('#text').val() === "") {
        alert('Pleaser enter a Username and Comment.');
        return false;
    }
    let displayNameVariable = $('#name').val();
    let commentVariable = $('#text').val();
    let idVariable = "comment" + commentID;
    commentID++;
    document.getElementById("name").value = "";
    document.getElementById("text").value = "";

    $(`.commentsContainer`).prepend(
        `<div class="comments" id=${idVariable} > 
            <span class="delete"> Delete </span> 
            <span class="edit"> Edit </span> 
            <i class="material-icons">&#xe853;</i>
            <p> ${displayNameVariable} </p>
            <h2 id="cmnt"> ${commentVariable} </h2>
            <div class="noDisplay" id=${idVariable}>
                <input type="text" class=${commentID} id="editComment" placeholder=${commentVariable}>
                <span id="editSubmit"> Submit </span> 
            </div>
        </div>`
    ); 
    
    $('#editSubmit').click(function() {
        let newComment = $(this).siblings('#editComment').val();
        $(this).parent().siblings('#cmnt').text(newComment);
    });

    $('.delete').click(function() {
        $(this).closest('.comments').remove();
    });  
});

$('.commentsContainer').on('click', '.edit', function() {
    let text = $(this).next().next().next().next();
    let toggleText = $(text);
    $(toggleText).toggle('.noDisplay');
});