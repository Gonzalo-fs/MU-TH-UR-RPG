<template>
  <div class="crt screen">
    <div id="screen" class="terminal_emulator"></div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  mounted() {

    var TerminalEmulator = {
      init: function(screen) {
        var inst = Object.create(this);
        inst.screen = screen;
        inst.createInput();
        
        return inst;
      },

      createInput: function() {
        var inputField = document.createElement('div');
        var inputWrap = document.createElement('div');
        
        inputField.className = 'terminal_emulator__field';
        inputField.innerHTML = '';
        inputWrap.appendChild(inputField);
        this.screen.appendChild(inputWrap);
        this.field = inputField;
        this.fieldwrap = inputWrap;
      },


      enterInput: function(input) {
        return new Promise( (resolve, reject) => {
        var randomSpeed = (max, min) => { 
          return Math.random() * (max - min) + min; 
        }
          
        var speed = randomSpeed(70, 90);
        var i = 0;
        var str = '';
        var type = () => {
          
          str = str + input[i];
          this.field.innerHTML = str.replace(/ /g, '&nbsp;');
          i++;
          
          setTimeout( () => {
            if( i < input.length){
              if( i % 5 === 0) speed = randomSpeed(80, 120);
              type();
            }else {
              console.log('tick');
              setTimeout( () => {
                console.log('tock');
                resolve();
              }, 400);
              
            } 
          }, speed);
          
          
        };
        
        
        type();
          
        });
      },
      
      enterCommand: function() {
        return new Promise( (resolve, reject ) => {
          var resp = document.createElement('div');
          resp.className = 'terminal_emulator__command';
          resp.innerHTML = this.field.innerHTML;
          this.screen.insertBefore( resp, this.fieldwrap);
          
          this.field.innerHTML = '';
          resolve();
        })
      },

      enterResponse: function(response) {
        
        return new Promise( (resolve, reject ) => {
          var resp = document.createElement('div');
          resp.className = 'terminal_emulator__response';
          resp.innerHTML = response;
          this.screen.insertBefore( resp, this.fieldwrap);
          
          resolve();
        })
      
        
      },
      
      wait : function( time, busy ) {
        busy = (busy === undefined ) ? true : busy;
        return new Promise( (resolve, reject) => {
          if (busy){
            this.field.classList.add('waiting');
          } else {
            this.field.classList.remove('waiting');
          }
          setTimeout( () => {
              resolve();
          }, time);
        });
      },
      
      reset : function() {
        return new Promise( (resolve, reject) => {
          this.field.classList.remove('waiting');
          resolve();
        });
      }

    };


    /*
    * 
    * This is where the magic happens
    *
    */ 


    var TE = TerminalEmulator.init(document.getElementById('screen'));


    TE.wait(1000, false)
      .then( TE.enterInput.bind(TE, 'WELCOME GAME MOTHER') )
      .then( TE.enterCommand.bind( TE ) )
      .then( TE.enterResponse.bind(TE, 'MAINFRAME UNIT - [CHECK]') )
      .then( TE.wait.bind(TE, 2000) )
      .then( TE.enterResponse.bind(TE, 'TERABYTE HARD-DRIVE - [CHECK]') )
      .then( TE.wait.bind(TE, 600) )
      .then( TE.enterResponse.bind(TE, 'USER RESPONSIVE - [CHECK]') )
      .then( TE.wait.bind(TE, 600) )
      .then( TE.enterResponse.bind(TE, '- scripts v9.9.9 installed. ') )
      .then( TE.wait.bind(TE, 300) )
      .then( TE.enterResponse.bind(TE, '- 10 billion dependencies installed. ') )
      .then( TE.wait.bind(TE, 700) )
      .then( TE.enterResponse.bind(TE, 'Make website responsive? (y/y)') )
      .then( TE.wait.bind(TE, 2000, false) )
      .then( TE.enterInput.bind(TE, 'y') )
      .then( TE.enterCommand.bind(TE) )
      .then( TE.wait.bind(TE, 400) )
      .then( TE.enterResponse.bind(TE, 'Make website accessible? (y/y)') ) 
      .then( TE.wait.bind(TE, 1800, false) )
      .then( TE.enterInput.bind(TE, 'y') )
      .then( TE.enterCommand.bind(TE) )
      .then( TE.wait.bind(TE, 400) )
      .then( TE.enterResponse.bind(TE, 'finalizing...') )
      .then( TE.wait.bind(TE, 2000) )
      .then( TE.enterResponse.bind(TE, 'Website complete! Wasn\'t that easy?') )
      .then( TE.reset.bind(TE) );

        
      },

}
</script>

<style>
.screen {
	 position: absolute;
	 overflow: hidden;
	 width: 100%;
	 height: 100%;
	 background: #000;
}
 .terminal_emulator {
	 position: absolute;
	 bottom: 0;
	 width: 100%;
	 min-height: 100%;
	 padding: 40px;
	 font-size: 20px;
	 line-height: 25px;
	 box-sizing: border-box;
	 text-align: left;
	 font-family: monospace;
	 font-weight: 700;
	 color: #9f9;
}
 .terminal_emulator__field, .terminal_emulator__command {
	 position: relative;
	 padding: 0 1em;
	 margin: 0 0 9px 0;
}
 .terminal_emulator__field:before, .terminal_emulator__command:before, .terminal_emulator__field:after, .terminal_emulator__command:after {
	 position: absolute;
}
 .terminal_emulator__field:before, .terminal_emulator__command:before {
	 left: 0;
	 top: 0;
	 content: ">";
}
 .terminal_emulator__response, .terminal_emulator__command b {
	 padding-bottom: 9px;
}
 .terminal_emulator__field {
	 display: inline-block;
	 min-width: 1em;
	 min-height: 1.5em;
	 box-sizing: border-box;
}
 .terminal_emulator__field:after {
	 right: 0;
	 bottom: 0.25em;
	 content: "";
	 width: 1em;
	 height: 1.5em;
	 background: #9f9;
	 animation: caretBlink 1s infinite;
}
 .terminal_emulator__field.waiting {
	 padding-left: 0;
	 padding-right: 0;
}
 .terminal_emulator__field.waiting:before {
	 display: none;
}
 @keyframes caretBlink {
	 0% {
		 opacity: 0;
	}
	 50% {
		 opacity: 0;
	}
	 51% {
		 opacity: 1;
	}
	 100% {
		 opacity: 1;
	}
}

/* CRT SCREEN */

@keyframes flicker {
  0% {
    opacity: 0.27861;
  }
  5% {
    opacity: 0.34769;
  }
  10% {
    opacity: 0.23604;
  }
  15% {
    opacity: 0.90626;
  }
  20% {
    opacity: 0.18128;
  }
  25% {
    opacity: 0.83891;
  }
  30% {
    opacity: 0.65583;
  }
  35% {
    opacity: 0.67807;
  }
  40% {
    opacity: 0.26559;
  }
  45% {
    opacity: 0.84693;
  }
  50% {
    opacity: 0.96019;
  }
  55% {
    opacity: 0.08594;
  }
  60% {
    opacity: 0.20313;
  }
  65% {
    opacity: 0.71988;
  }
  70% {
    opacity: 0.53455;
  }
  75% {
    opacity: 0.37288;
  }
  80% {
    opacity: 0.71428;
  }
  85% {
    opacity: 0.70419;
  }
  90% {
    opacity: 0.7003;
  }
  95% {
    opacity: 0.36108;
  }
  100% {
    opacity: 0.24387;
  }
}
@keyframes textShadow {
  0% {
    text-shadow: 0.4389924193300864px 0 1px rgba(0,30,255,0.5), -0.4389924193300864px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  5% {
    text-shadow: 2.7928974010788217px 0 1px rgba(0,30,255,0.5), -2.7928974010788217px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  10% {
    text-shadow: 0.02956275843481219px 0 1px rgba(0,30,255,0.5), -0.02956275843481219px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  15% {
    text-shadow: 0.40218538552878136px 0 1px rgba(0,30,255,0.5), -0.40218538552878136px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  20% {
    text-shadow: 3.4794037899852017px 0 1px rgba(0,30,255,0.5), -3.4794037899852017px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  25% {
    text-shadow: 1.6125630401149584px 0 1px rgba(0,30,255,0.5), -1.6125630401149584px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  30% {
    text-shadow: 0.7015590085143956px 0 1px rgba(0,30,255,0.5), -0.7015590085143956px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  35% {
    text-shadow: 3.896914047650351px 0 1px rgba(0,30,255,0.5), -3.896914047650351px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  40% {
    text-shadow: 3.870905614848819px 0 1px rgba(0,30,255,0.5), -3.870905614848819px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  45% {
    text-shadow: 2.231056963361899px 0 1px rgba(0,30,255,0.5), -2.231056963361899px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  50% {
    text-shadow: 0.08084290417898504px 0 1px rgba(0,30,255,0.5), -0.08084290417898504px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  55% {
    text-shadow: 2.3758461067427543px 0 1px rgba(0,30,255,0.5), -2.3758461067427543px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  60% {
    text-shadow: 2.202193051050636px 0 1px rgba(0,30,255,0.5), -2.202193051050636px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  65% {
    text-shadow: 2.8638780614874975px 0 1px rgba(0,30,255,0.5), -2.8638780614874975px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  70% {
    text-shadow: 0.48874025155497314px 0 1px rgba(0,30,255,0.5), -0.48874025155497314px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  75% {
    text-shadow: 1.8948491305757957px 0 1px rgba(0,30,255,0.5), -1.8948491305757957px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  80% {
    text-shadow: 0.0833037308038857px 0 1px rgba(0,30,255,0.5), -0.0833037308038857px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  85% {
    text-shadow: 0.09769827255241735px 0 1px rgba(0,30,255,0.5), -0.09769827255241735px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  90% {
    text-shadow: 3.443339761481782px 0 1px rgba(0,30,255,0.5), -3.443339761481782px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  95% {
    text-shadow: 2.1841838852799786px 0 1px rgba(0,30,255,0.5), -2.1841838852799786px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  100% {
    text-shadow: 2.6208764473832513px 0 1px rgba(0,30,255,0.5), -2.6208764473832513px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
}
.crt::after {
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(18, 16, 16, 0.1);
  opacity: 0;
  z-index: 2;
  pointer-events: none;
  animation: flicker 0.15s infinite;
}
.crt::before {
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
  z-index: 2;
  background-size: 100% 2px, 3px 100%;
  pointer-events: none;
}
.crt {
  animation: textShadow 1.6s infinite;
}

 
</style>