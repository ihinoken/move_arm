let speechRecognition = window.webkitSpeechRecognition
let recognition = new speechRecognition()
let textbox = $('#textbox')
let instructions = $('#instructions')
var content = ''

recognition.continuous = true

recognition.onstart = function () {
    instructions.text("Voice Recognition is on")
}

recognition.onspeechend = function () {
    instructions.text("Speech Recognition has been stopped")
}

recognition.onerror = function () {
    instruction.text("try again")
}

recognition.onresult = function(result) {
    let current = result.resultIndex;
    let transcript =result.results[current][0].transcript

    content += transcript
    textbox.val(content)
}

$("#start-btn").click(function(result){
    recognition.start()
})
textbox.on('input', function(){
    content = $(this).val()
})