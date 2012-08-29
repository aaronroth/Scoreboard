$(document).ready(function() {
    var players = get_players();
    game_setup(players);
    $('.score').live('click', function() {
       var curr_score = parseInt($(this).children().first().text());
       if (curr_score != 3) {
           if (curr_score != 0) {
               $(this).children().last().remove();
           }
           $(this).children().first().text(curr_score + 1);
           $(this).append('<img src="images/' + (curr_score + 1) + '.png" />');
           check_if_winner($(this));
       }
    });
});

function check_if_winner(player_obj) {
    var player_string = player_obj.parent().attr('id');
    var player = player_string.slice(6, 7);
    var score = 0;
    
    for (var i = 0; i < 7; i++) {
        var span_score = player_obj.parent().find('span:eq(' + i + ')').text();
        if (span_score == 3) {
            score += 1;
        }
    }
    
    if (score == 7) {
        alert('Player ' + player + ' won the game!');
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
                                  '<div id="bull-box" class="nums" style="padding:0px"><img id="bull" src="images/bull.png" /></div>' +
                              '</div>' +
                          '</div>' +
                     '</div>';
    
    scoreboard = $(scoreboard);
    for (var i = 1; i <= players; i++) {
        var score_obj = '<div id="player' + i + 'score" class="player-scores">' +
                            '<div class="score"><span>0</span></div>' +
                            '<div class="score"><span>0</span></div>' +
                            '<div class="score"><span>0</span></div>' +
                            '<div class="score"><span>0</span></div>' +
                            '<div class="score"><span>0</span></div>' +
                            '<div class="score"><span>0</span></div>' +
                            '<div class="score"><span>0</span></div>' +
                        '</div>';
                        
        var player_num_obj = '<div id="player' + i + 'header" class="player-headers">Player ' + i +'</div>';
        
        scoreboard.children().first().append(player_num_obj);
        scoreboard.children().first().next().append(score_obj);
    }
    
    var width = (players * 80) + 82;
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