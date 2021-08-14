let arr = []
        let ath = ['+','-','x','/'];
        var output = document.getElementById("output");
        var equal = document.getElementById("equal");
        var addition = document.getElementById("add");
        var minus = document.getElementById("sub");
        var multiply = document.getElementById("mul")
        var divide = document.getElementById("div");
        var number = document.getElementById("num");
        var number1 = document.getElementById("num1");
        var number2 = document.getElementById("num2");
        var number3 = document.getElementById("num3");
        var number4 = document.getElementById("num4");
        var number5 = document.getElementById("num5");
        var number6 = document.getElementById("num6");
        var number7 = document.getElementById("num7");
        var number8 = document.getElementById("num8");
        var number9 = document.getElementById("num9");
        var clear = document.getElementById("dot");
        var dis = document.getElementById("disAth")

        output.addEventListener('keyup',out)

        function out(){
            if(output.value >= 'A'){
                alert('Only numbers are allowed')
                output.value = ''
            }
           
        
        }

        equal.addEventListener('click',equ)

        function equ(){
            arr.push(output.value)
            console.log(arr)
            let ans = 0;
            for(let i=0;i<arr.length;i++){
                if(arr[i] === '+'){
                    arr.splice(i,1)
                    ans = arr.map((v) => parseInt(v)).reduce((a,c) => a+c,0)
                    console.log(ans)
                }

                if(arr[i] === '-'){
                    arr.splice(i,1)
                    ans = arr.map((v) => parseInt(v)).reduce((a,c) => a-c)
                }

                if(arr[i] === 'x'){
                    arr.splice(i,1)
                    ans = arr.map((v) => parseInt(v)).reduce((a,c) => a*c)
                }

                if(arr[i] === '/'){
                    arr.splice(i,1)
                    ans = arr.map((v) => parseInt(v)).reduce((a,c) => a/c)
                }
            }
            
            
            output.value = ans;
            dis.innerText = ans;
        
            
           
        }

        addition.addEventListener('click',add)

        function add(){
            arr.length = 0;
            arr.push(output.value)
            arr.push('+')
            console.log(arr)
            output.value = ''
            dis.innerText = dis.innerText + '+'
            
        }

        minus.addEventListener('click',sub);

        function sub(){
            arr.length = 0;
            arr.push(output.value)
            arr.push('-')
            console.log(arr)
            output.value = ''
            dis.innerText = dis.innerText + '-'
        }

        multiply.addEventListener('click',mul)

        function mul(){
            arr.length = 0;
            arr.push(output.value)
            arr.push('x')
            console.log(arr)
            output.value = ''
            dis.innerText = dis.innerText + 'x'
        }

        divide.addEventListener('click',div)

        function div(){
            arr.length = 0;
            arr.push(output.value)
            arr.push('/')
            console.log(arr)
            output.value = ''
            dis.innerText = dis.innerText + '/'
        }

        number.addEventListener('click',num);

        function num(){
            output.value = output.value+number.innerText;
            dis.innerText = dis.innerText + '1'
        }

        number1.addEventListener('click',num1);

        function num1(){
            output.value = output.value+number1.innerText;
            dis.innerText = dis.innerText + '2'
        }

        number2.addEventListener('click',num2);

        function num2(){
            output.value = output.value+number2.innerText;
            dis.innerText = dis.innerText + '3'
        }

        number3.addEventListener('click',num3);

        function num3(){
            output.value = output.value+number3.innerText;
            dis.innerText = dis.innerText + '4'
        }

        number4.addEventListener('click',num4);

        function num4(){
            output.value = output.value+number4.innerText;
            dis.innerText = dis.innerText + '5'
        }

        number5.addEventListener('click',num5);

        function num5(){
            output.value = output.value+number5.innerText;
            dis.innerText = dis.innerText + '6'
        }

        number6.addEventListener('click',num6);

        function num6(){
            output.value = output.value+number6.innerText;
            dis.innerText = dis.innerText + '7'
        }

        number7.addEventListener('click',num7);

        function num7(){
            output.value = output.value+number7.innerText;
            dis.innerText = dis.innerText + '8'
        }

        number8.addEventListener('click',num8);

        function num8(){
            output.value = output.value+number8.innerText;
            dis.innerText = dis.innerText + '9'
        }

        number9.addEventListener('click',num9);

        function num9(){
            output.value = output.value+number9.innerText;
            dis.innerText = dis.innerText + '0'
        }


        clear.addEventListener('click',c);

        function c(){
            output.value = ''
            dis.innerText = ""
        }