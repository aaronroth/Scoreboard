$(document).ready(function() {
    var players = get_players();
    game_setup(players);
    $('.score').live('click', function() {
       var curr_score = parseInt($(this).text());
       if (curr_score != 3) {
           $(this).text(curr_score + 1);
           check_if_winner($(this));
       }
    });
});

function check_if_winner(player_obj) {
    var id = player_obj.parent().attr('id');
    var score = 0;
    
    for (var i = 0; i < 7; i++) {
        if (parseInt($('#' + id + ' > div').get(i).innerHTML) == 3) {
            score += 1;
        }
    }
    
    if (score == 7) {
        alert(id + ' won the game!');
    }
}

function game_setup(players) {
    players = parseInt(players);
    var scoreboard = '<div id="scoreboard">' +
                          '<div id="header"><div id="number-header"></div></div>' +
                          '<div id="scores-area">' +
                              '<div id="board-nums">' +
                                  '<div class="nums">20</div>' +
                                  '<div class="nums">19</div>' +
                                  '<div class="nums">18</div>' +
                                  '<div class="nums">17</div>' +
                                  '<div class="nums">16</div>' +
                                  '<div class="nums">15</div>' +
                                  '<div class="nums">BE</div>' +
                              '</div>' +
                          '</div>' +
                     '</div>';
    
    scoreboard = $(scoreboard);
    for (var i = 1; i <= players; i++) {
        var score_obj = '<div id="player' + i + 'score" class="player-scores">' +
                            '<div class="score">0</div>' +
                            '<div class="score">0</div>' +
                            '<div class="score">0</div>' +
                            '<div class="score">0</div>' +
                            '<div class="score">0</div>' +
                            '<div class="score">0</div>' +
                            '<div class="score">0</div>' +
                        '</div>';
                        
        var player_num_obj = '<div id="player' + i + 'header" class="player-headers">' + i +'</div>';
        
        scoreboard.children().first().append(player_num_obj);
        scoreboard.children().first().next().append(score_obj);
    }
    
    var width = (players * 80) + 80;
    scoreboard.css('width', width);
                     
    $('body').append(scoreboard);
}

function get_players() {
    var player_num = prompt('How many players?');
    
    // Need to add better input validation.
    //  * Make sure a non-number string isn't entered.
    //  * Set a limit on number of players.
    if (player_num == '') {
        return 2;
    } else {
        return player_num;  
    } 
}