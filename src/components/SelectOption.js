import {useDispatch, useSelector} from "react-redux";
import {language} from '../reducers/language';

function SelectOption() {
    const dispatch = useDispatch();
    let languageRes = useSelector((state) => state.language.value);

    function execLang(val) {
            dispatch(language(val.target.value));
    }
  return (
    <select onChange={execLang} value={languageRes} className="form-select w-auto mb-2">
    <option value="en">English</option>
    <option value="ru">Pусский</option>
    <option value="de">Deutsch</option>
    <option value="fr">Français</option>
    <option value="es">Español</option>
    <option value="zh">普通</option>
    </select>
    );
}

export default SelectOption;
