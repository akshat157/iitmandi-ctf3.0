/*
Level's flag go in this file
*/
module.exports = function(key, level){
	switch(level){
		case 0:
			if(key === 'ctf3iitmandi{level0_flag}'){
				return 13;
			}
			else return 0;
		case 1:
			if(key === "ctf3iitmandi{CSS&JS_4R3_G00D&_H7ML_IS_NO7_A_PROG_LANGUAGE}"){
				return 20;
			}
			else return 0;
		case 2:
			if(key === "ctf3iitmandi{FaceToTheSunshine}"){
				return 50;
			}
			else return 0;
		case 3:
			if(key === "ctf3iitmandi{Winr4rFreeTri4l}"){
				return 120;
			}
			else return 0;
		case 4:
			if(key === "ctf3iitmandi{MEMESQUADROXXX}"){
				return 100;
			}
			else return 0;
		case 5:
			if(key === "ctf3iitmandi{d3s1gn4uts_g3ts_th3_cr3d1ts}"){
				return 170;
			}
			else return 0;
		case 6:
			if(key === "ctf3iitmandi{MAISAMAYHUN}"){
				return 180;
			}
			else return 0;
		case 7:
			if(key === "ctf3iitmandi{Th1nk_0uts1de_the_b0x}"){
				return 130;
			}
			else return 0;
		case 8:
			if(key === "ctf3iitmandi{You'veg0T4Ff1niTy}"){
				return 160;
			}
			else return 0;
		case 9:
			if(key === "ctf3iitmandi{DEMENTIA}"){
				return 80;
			}
			else return 0;
		case 10:
			if(key === "ctf3iitmandi{OTP_C4N&ME4N$0Meth1ng}"){
				return 300;
			}
			else return 0;
		case 11:
			if(key === "ctf3iitmandi{7355608}"){
				return 42;
			}
			else return 0;
		default:
			return 0;
	}
}
