var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var offset = -20;
var isNext = false;
var isPrev = true;
var html = '';
var i = 1;
var childs;
$("#next").click(function () {
    offset += 20;
    (function () {
        return __awaiter(this, void 0, void 0, function () {
            var pokelist, j, _i, _a, pokemon;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, $.get('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=' + offset)];
                    case 1:
                        pokelist = _b.sent();
                        $('#pokemons li:lt(' + i + ')').remove();
                        for (j = i; j >= i - 20; j--) {
                            $('#' + j).remove();
                        }
                        for (_i = 0, _a = pokelist.results; _i < _a.length; _i++) {
                            pokemon = _a[_i];
                            html = "<li>" + pokemon.name + "</li>";
                            $('#pokemons ul').append(html);
                            html = "<button id='" + i + "' class='detail'>Details</button>";
                            $('#pokemons ul').append(html);
                            i++;
                        }
                        return [2 /*return*/];
                }
            });
        });
    })();
});
$("#prev").click(function () {
    (function () {
        return __awaiter(this, void 0, void 0, function () {
            var pokelist, _i, _a, pokemon;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        offset -= 20;
                        return [4 /*yield*/, $.get('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=' + offset)];
                    case 1:
                        pokelist = _b.sent();
                        $('#pokemons li:lt(' + i + ')').remove();
                        for (i; i > offset + 1; i--) {
                            $('#' + i).remove();
                        }
                        for (_i = 0, _a = pokelist.results; _i < _a.length; _i++) {
                            pokemon = _a[_i];
                            html = "<li>" + pokemon.name + "</li>";
                            $('#pokemons ul').append(html);
                            html = "<button id='" + i + "' class='detail'>Details</button>";
                            $('#pokemons ul').append(html);
                            i++;
                        }
                        return [2 /*return*/];
                }
            });
        });
    })();
});
$('body').on('click', '.detail', function () {
    var id = $(this).attr("id");
    childs = $('body').children();
    (function () {
        return __awaiter(this, void 0, void 0, function () {
            var pokestat, title, titName, name, ab, titWeight, weight, buttonon, _i, _a, stat, sprite;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, $.get('https://pokeapi.co/api/v2/pokemon/' + id + '/')];
                    case 1:
                        pokestat = _b.sent();
                        $('body').children().remove();
                        title = "<h1>Details</h1>";
                        titName = "<p>Name</p>";
                        name = "<a>" + pokestat.name + "</a><br>";
                        ab = "<p>Abilities</p>";
                        titWeight = "<p>Weight</p>";
                        weight = "<a>" + pokestat.weight + "</a><br>";
                        buttonon = "<button id='back'>Back to List</button>";
                        $('body').append(title);
                        $('body').append(titName);
                        $('body').append(name);
                        $('body').append(titWeight);
                        $('body').append(weight);
                        $('body').append(ab);
                        for (_i = 0, _a = pokestat.abilities; _i < _a.length; _i++) {
                            stat = _a[_i];
                            html = "<a>" + stat.ability.name + "</a><br>";
                            $('body').append(html);
                        }
                        sprite = "<img src='" + pokestat.sprites.front_default + "'>";
                        $('body').append(sprite);
                        $('body').append(buttonon);
                        return [2 /*return*/];
                }
            });
        });
    })();
});
$('body').on('click', '#back', function () {
    $('body').children().remove();
    console.log(childs);
    $('body').append(childs[0]);
});
