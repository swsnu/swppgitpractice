function prime5to50() {
	function get_next_prime() {
		fade_out(function() {
			var now_prime = +document.getElementById("num").innerHTML;
			for (++now_prime;; ++now_prime) {
				if (now_prime > 50) {
					now_prime = 5;
				}
				var i;
				for (i=2; i*i<=now_prime; i+=i%2+1) {
					if (now_prime % i == 0) {
						break;
					}
				}
				if (i * i > now_prime) {
					break;
				}
			}
			document.getElementById("num").innerHTML = String(now_prime);
			fade_in(function() {
				setTimeout(get_next_prime, 2000);
			});
		});
	}
	setTimeout(get_next_prime, 2000);
}

function fade_in(k) {
	function inner() {
		let u : number = +document.getElementById("num").style.opacity;
		if (u < 1) {
			document.getElementById("num").style.opacity = String(u + 0.01);
			setTimeout(inner, 10);
		} else {
			k();
		}
	}
	setTimeout(inner, 10);
}

function fade_out(k) {
	function inner() {
		let u : number = +document.getElementById("num").style.opacity;
		if (u > 0) {
			document.getElementById("num").style.opacity = String(u - 0.01);
			setTimeout(inner, 10);
		} else {
			k();
		}
	}
	setTimeout(inner, 10);
}

