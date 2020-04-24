$(() => {
    const MAX = 180;
    let userResults = [102, 120, 156, 23, 178];

    let score = $(".score");

    let inf = $(".info");

    let insertScore = (score) => {

    }

    for (let i = 0; i < userResults.length; i++) {
        score.eq([i]).text(userResults[i]);
        if (userResults[i] >= 120) inf.eq([i]).text("Zaliczone")
        else inf.eq([i]).text("Niezaliczone");
    }
});
