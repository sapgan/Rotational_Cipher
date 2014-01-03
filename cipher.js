//ROT-13 Project
function stringRot13(str) {
    var rot13 = '';
        var lower_case   = "abcdefghijklmnopqrstuvwxyz";
        var upper_case = lower_case.toUpperCase();
        
        for(i=0; i < str.length; i++){
            if (str[i] == ' ')
            {
                rot13 += ' ';
            }
            else
            {
                  if (str[i] == str[i].toUpperCase()){
                    loc = upper_case.indexOf(str[i]);
                    rot13 += upper_case.charAt((loc+13)%26).toUpperCase();
                }
                else
                {
                    loc = lower_case.indexOf(str[i]);
                    rot13 += lower_case.charAt((loc+13)%26);
                }
            }
        
        }
        return rot13;
    
}
