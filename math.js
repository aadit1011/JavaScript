let input = document.getElementsByClassName("in")[0];
      let outer = document.getElementsByClassName("out")[0];
      function square() {
          let result=parseInt(input.value);
          result = result * result;
          outer.value = result;
      }