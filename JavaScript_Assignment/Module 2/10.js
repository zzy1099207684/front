// Write a voting program as described below for small-scale meeting use. (8p)

'use strict';
function main(){
    
}



let candidates = [];

function creatNamesTable(){
    let candidateNum = parseInt(document.querySelector("#candidateNum").value);
    let candidatesName = "<span>please input their name </span><br>";
    for (let index = 0; index < candidateNum; index++) {
        candidatesName+="<label for='candidateName"+index+"'>name: </label> <input type='text' name='candidateName"+index+"' id='candidateName"+index+"'> <br>";
    }
    document.querySelector("#candidatesName").innerHTML = candidatesName;
    document.querySelector("#creatNamesTable").remove();
    document.querySelector("#submitName").style.display = "";
}

function submitName(){
    let candidateNum = parseInt(document.querySelector("#candidateNum").value);
    for (let index = 0; index < candidateNum; index++) {
        let tempDic = {}
        tempDic["name"] = document.querySelector("#candidateName"+index).value;
        tempDic["votes"] = 0;
        candidates.push(tempDic);
    }
    // console.log(candidates)
    document.querySelector("#submitName").style.display = "none"
    document.querySelector("#voterArea").style.display = "";
    return candidates;
}


function creatVoteTable(){
    let creatVoteInputTable="<span>input you supporting candidate name</span><br>";
    let voterNum = parseInt(document.querySelector("#voterNum").value);
    for (let index = 0; index < voterNum; index++) {
        creatVoteInputTable+="<label for='voteCandidateName"+index+"'>name: </label> <input type='text' name='voteCandidateName"+index+"' id='voteCandidateName"+index+"'> <br>";
    }
    document.querySelector("#voteCandidatesName").innerHTML = creatVoteInputTable;
    document.querySelector("#creatVoteTable").style.display = "none"
    document.querySelector("#submitVote").style.display = ""
}

function submitVote(){
    let voterNum = parseInt(document.querySelector("#voterNum").value);
    let winner = {};
    for (let index = 0; index < voterNum; index++) {
        let vote = document.querySelector("#voteCandidateName"+index).value;
        if(!isNaN(vote)){
            continue;
        }
        for (let index = 0; index < candidates.length; index++) {
            let element = candidates[index]
            if(vote === element["name"]){
                element["votes"]+=1;
                break;
            }
        }
    }
    candidates.sort(function(a, b){
        return b.votes - a.votes;
    });
    // The winner is pamela with 3 votes.
    // results:
    // pamela: 3 votes
    // frank: 1 votes
    // ellie: 1 votes
    if(candidates.length === 0){
        console.log("no body win");
        document.querySelector("#submitVote").style.display = "none";
        return;
    }
    console.log("The winner is "+candidates[0]["name"]+" with "+candidates[0]["votes"]+" votes.");
    console.log("results:");
    candidates.forEach(element => {
        console.log(element["name"]+": "+element["votes"]+" votes");
    });
}


document.querySelector("#creatNamesTable").addEventListener("click", creatNamesTable);

document.querySelector("#submitName").addEventListener("click", submitName);

document.querySelector("#creatVoteTable").addEventListener("click", creatVoteTable);

document.querySelector("#submitVote").addEventListener("click", submitVote);



