
status="Mr.Linhkool"
var a=new Array(),n=""
a[1]='T';
a[2]='h';
a[3]='ậ';
a[4]='t';
a[5]=' ';
a[6]='r';
a[7]='a';
a[8]=' ';
a[9]='t';
a[10]=' ';
a[11]='t';
a[12]='h';
a[13]='í';
a[14]='c';
a[15]='h';
a[16]=' ';
a[17]='ô';
a[18]='n';
a[19]='g';
a[20]=' ';
a[21]='l';
a[22]='â';
a[23]='u';
a[24]=' ';
a[25]='r';
a[26]='ồ';
a[27]='i';
a[28]='.';
a[29]=' ';
a[30]='C';
a[31]='h';
a[32]='ỉ';
a[33]=' ';
a[34]='đ';
a[35]='ợ';
a[36]='i';
a[37]=' ';
a[38]='ô';
a[39]='n';
a[40]='g';
a[41]=' ';
a[42]='t';
a[43]='ỏ';
a[44]=' ';
a[45]='t';
a[46]='ì';
a[47]='n';
a[48]='h';
a[49]=' ';
a[50]='m';
a[51]='à';
a[52]=' ';
a[53]='m';
a[54]='ã';
a[55]='i';
a[56]=' ';
a[57]='k';
a[58]='h';
a[59]='ô';
a[60]='n';
a[61]='g';
a[62]=' ';
a[63]='t';
a[64]='h';
a[65]='ấ';
a[66]='y';
a[67]=' ';
a[68]='♥';
a[69]='♥';
a[70]='♥';
/*a[71]='n';
a[73]='g';
a[74]=' ';
a[75]='g';
a[76]='h';
a[77]='é';
a[78]='t';
a[79]=' ';
a[80]='♥';
a[81]='♥';
a[82]='♥';*/
/*a[83]=' ';
a[84]='♥';
a[85]='♥';
a[86]='♥';
a[87]='♥';
a[88]='♥';
a[89]='♥';*/
function one()
{
t=document.f.txt.value
j=t.length
if(j>0)
{
for(var i=1;i<=j;i++)
{
n=n+a[i]
if(i==71)
{
document.f.txt.value=""
n=""
}
}
}
document.f.txt.value=n
n=""
setTimeout("one()",1)
}
function s()
{
}
function on()
{
one()
}

        $(document).ready(function() {
            $('#k').hide();
            $('h1').click(function() {
                $('.active').removeClass('active');
                $('#k').slideUp('fast');
                if($(this).next('#k').is(':hidden') == true) {
                $(this).addClass('active');
                $(this).next('#k').slideDown('fast');
                }
            });
        });
					function Yeu()
					{
					$("#divResult").fadeOut(0);
					$("#divResult").html("</br><h2>Haha vậy hả :v Đừng có chối nữa nhé :)))))))))))))))) </h2><br>");
					$("#divResult").fadeIn(2000,function()
							{
							$("#divResult2").fadeOut(0);
							$("#divResult2").html("<p>Vậy là đồng ý rồi nhỉ :))</p></br>");
							$("#divResult2").fadeIn(2000,function()
									{
									$("#divResult3").fadeOut(0);
									$("#divResult3").html("<p>Từ giờ chúng ta chính thức làm ny. Không nói nhiều ♥♥♥</p></br>");
									$("#divResult3").fadeIn(2000);
									}
								);
							}
						);
					}
				