        var _0x43a3 = ['click\x20touch', 'position', 'active', 'getElementById', 'input[type=\x22checkbox\x22]',
            '--offset', 'remove', 'left', 'classList', 'preventDefault', '<em\x20/>', 'each', 'onload', '.active',
            'css', '150vh', 'className', 'parentElement', 'push', 'letter\x20out', 'querySelector', '0px',
            'setAttribute', 'letter', 'addClass', 'opacity', 'checked', 'static', 'active2', 'clear',
            'letter\x20in', '.tabbar\x20ul\x20li\x20a', 'charAt', 'innerHTML', '.splash', 'children', 'width',
            '.tabbar', 'letter\x20behind', 'add', 'find', 'removeClass', 'hide', 'appendTo', '.panel', 'length',
            'style', 'span', 'top', 'word', 'parent'
        ];
        (function (_0x39c3bc, _0xfe0a2) {
            var _0x43a388 = function (_0x49e3a5) {
                while (--_0x49e3a5) {
                    _0x39c3bc['push'](_0x39c3bc['shift']());
                }
            };
            _0x43a388(++_0xfe0a2);
        }(_0x43a3, 0x169));
        var _0x49e3 = function (_0x39c3bc, _0xfe0a2) {
            _0x39c3bc = _0x39c3bc - 0x8b;
            var _0x43a388 = _0x43a3[_0x39c3bc];
            return _0x43a388;
        };
        var _0x5afee5 = _0x49e3,
            pages, activePage;
        window[_0x5afee5(0x93)] = () => {
            var _0x51d030 = _0x5afee5;
            pages = $(_0x51d030(0xb3)), activePage = 0x0;
        };

        function setPage(_0x52d09d) {
            var _0x25196c = _0x5afee5;
            pages[activePage]['classList'][_0x25196c(0x8d)](_0x25196c(0xa3)), pages[activePage]['classList'][_0x25196c(
                0xae)](_0x25196c(0xb1)), pages[_0x52d09d][_0x25196c(0x8f)][_0x25196c(0x8d)](_0x25196c(0xb1)), pages[
                _0x52d09d][_0x25196c(0x8f)][_0x25196c(0xae)](_0x25196c(0xa3)), pages[0x0][_0x25196c(0x8f)][
                _0x25196c(0x8d)
            ](_0x25196c(0xa2)), activePage = _0x52d09d;
        }
        $(_0x5afee5(0xac))[_0x5afee5(0x92)](function () {
            var _0x42034e = _0x5afee5,
                _0x4aad47 = $(this);
            $(_0x42034e(0x91))[_0x42034e(0xb2)](_0x4aad47)[_0x42034e(0x95)](_0x42034e(0x8c), _0x4aad47['find'](
                _0x42034e(0x94))[_0x42034e(0xbb)]()[_0x42034e(0x8e)] + _0x4aad47[_0x42034e(0xaf)](
                _0x42034e(0x94))[_0x42034e(0xab)]() / 0x2);
        }), $(_0x5afee5(0xa6))['on'](_0x5afee5(0xba), function (_0x4751b4) {
            var _0x2be77c = _0x5afee5;
            _0x4751b4[_0x2be77c(0x90)]();
            var _0xb24931 = $(this);
            !_0xb24931[_0x2be77c(0xb9)]()['hasClass'](_0x2be77c(0xbc)) && (_0xb24931[_0x2be77c(0xb9)]()[
                _0x2be77c(0xb9)]()['children']('li')[_0x2be77c(0xb0)]('active'), _0xb24931[_0x2be77c(
                0xb9)]()[_0x2be77c(0x9f)](_0x2be77c(0xbc)), _0xb24931[_0x2be77c(0xb9)]()['parent']()[
                _0x2be77c(0xb9)]()[_0x2be77c(0xaa)]('em')[_0x2be77c(0x95)]('--offset', _0xb24931[
                    _0x2be77c(0xb9)]()[_0x2be77c(0xbb)]()[_0x2be77c(0x8e)] + _0xb24931[_0x2be77c(0xb9)]
                ()[_0x2be77c(0xab)]() / 0x2));
        });

        function openNav() {
            var _0x48d14d = _0x5afee5;
            document[_0x48d14d(0xbd)]('mySidenav')[_0x48d14d(0xb5)][_0x48d14d(0x8e)] = _0x48d14d(0x9c);
        }

        function closeNav() {
            var _0x4116e8 = _0x5afee5;
            document[_0x4116e8(0xbd)]('mySidenav')[_0x4116e8(0xb5)][_0x4116e8(0x8e)] = '-300px';
        }
        console[_0x5afee5(0xa4)](), setTimeout(function () {
            var _0x3f4816 = _0x5afee5;
            document[_0x3f4816(0x9b)](_0x3f4816(0x8b))[_0x3f4816(0x9d)](_0x3f4816(0xa1), !![]);
        }, 0x64);
        let words = document['getElementsByClassName'](_0x5afee5(0xb8)),
            wordArray = [],
            currentWord = 0x0;
        words[currentWord][_0x5afee5(0xb5)][_0x5afee5(0xa0)] = 0x1;
        for (var i = 0x0; i < words['length']; i++) {
            splitLetters(words[i]);
        }

        function changeWord() {
            var _0x3d236a = _0x5afee5,
                _0x44beb5 = wordArray[currentWord],
                _0x1f353a = currentWord == words[_0x3d236a(0xb4)] - 0x1 ? wordArray[0x0] : wordArray[currentWord + 0x1];
            for (var _0x22061f = 0x0; _0x22061f < _0x44beb5[_0x3d236a(0xb4)]; _0x22061f++) {
                animateLetterOut(_0x44beb5, _0x22061f);
            }
            for (var _0x22061f = 0x0; _0x22061f < _0x1f353a[_0x3d236a(0xb4)]; _0x22061f++) {
                _0x1f353a[_0x22061f][_0x3d236a(0x97)] = _0x3d236a(0xad), _0x1f353a[0x0][_0x3d236a(0x98)]['style'][
                    _0x3d236a(0xa0)
                ] = 0x1, animateLetterIn(_0x1f353a, _0x22061f);
            }
            currentWord = currentWord == wordArray[_0x3d236a(0xb4)] - 0x1 ? 0x0 : currentWord + 0x1;
        }

        function animateLetterOut(_0x488aeb, _0x59ee44) {
            setTimeout(function () {
                var _0x5bc191 = _0x49e3;
                _0x488aeb[_0x59ee44][_0x5bc191(0x97)] = _0x5bc191(0x9a);
            }, _0x59ee44 * 0x50);
        }

        function animateLetterIn(_0x443ed6, _0x2eee49) {
            setTimeout(function () {
                var _0xa94328 = _0x49e3;
                _0x443ed6[_0x2eee49][_0xa94328(0x97)] = _0xa94328(0xa5);
            }, 0x154 + _0x2eee49 * 0x50);
        }

        function splitLetters(_0x21a97d) {
            var _0x44b88a = _0x5afee5,
                _0x1d90ac = _0x21a97d[_0x44b88a(0xa8)];
            _0x21a97d[_0x44b88a(0xa8)] = '';
            var _0x389d7a = [];
            for (var _0x2440b0 = 0x0; _0x2440b0 < _0x1d90ac[_0x44b88a(0xb4)]; _0x2440b0++) {
                var _0x87384d = document['createElement'](_0x44b88a(0xb6));
                _0x87384d[_0x44b88a(0x97)] = _0x44b88a(0x9e), _0x87384d[_0x44b88a(0xa8)] = _0x1d90ac[_0x44b88a(0xa7)](
                    _0x2440b0), _0x21a97d['appendChild'](_0x87384d), _0x389d7a[_0x44b88a(0x99)](_0x87384d);
            }
            wordArray[_0x44b88a(0x99)](_0x389d7a);
        }
        changeWord(), setInterval(changeWord, 0xfa0), setTimeout(function () {
            var _0x4705a3 = _0x5afee5;
            $(_0x4705a3(0xa9))[_0x4705a3(0x95)](_0x4705a3(0xb7), _0x4705a3(0x96));
        }, 0x1388);