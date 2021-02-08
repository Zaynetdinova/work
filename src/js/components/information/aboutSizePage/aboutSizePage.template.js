import {transitionWrapper} from "../../common/transitionTitle";



export function aboutSizePageTemplate() {
    return `
        <div class="wrapper-size-page">
            ${transitionWrapper(link)}
           	<div class="title-shopping">О покупках</div>
           	<div class="wrapper-size-main-one">
           	    <div class="title-size-page">Таблица основных размеров</div>
                <table>
                    <tr class="one-line">
                        <td class="title">Размер</td>
                        <td>38</td>
                        <td>40</td>
                        <td>42</td>
                        <td>44</td>
                        <td>46</td>
                        <td>48</td>
                        <td>50</td>
                        <td>52</td>
                        <td>54</td>
                        <td>56</td>
                        <td>58</td>
                        <td>60</td>
                        <td>62</td>
                        <td>64</td>
                        <td>66</td>
                        <td>68</td>
                        <td>70</td>
                        <td>72</td>
                        <td>74</td>
                        <td>76</td>
                        <td>78</td>
                    </tr>
                    <tr>
                        <td class="title">Грудь (см.)</td>
                        <td>76</td>
                        <td>80</td>
                        <td>84</td>
                        <td>88</td>
                        <td>92</td>
                        <td>96</td>
                        <td>100</td>
                        <td>104</td>
                        <td>108</td>
                        <td>112</td>
                        <td>116</td>
                        <td>120</td>
                        <td>124</td>
                        <td>128</td>
                        <td>132</td>
                        <td>136</td>
                        <td>140</td>
                        <td>144</td>
                        <td>148</td>
                        <td>144</td>
                        <td>148</td>
                    </tr>
                    <tr class="white-line">
                        <td class="title">Талия (см.)</td>
                        <td>58</td>
                        <td>62</td>
                        <td>64</td>
                        <td>68</td>
                        <td>72</td>
                        <td>76</td>
                        <td>80</td>
                        <td>86</td>
                        <td>88</td>
                        <td>92</td>
                        <td>97</td>
                        <td>101</td>
                        <td>106</td>
                        <td>110</td>
                        <td>114</td>
                        <td>118</td>
                        <td>122</td>
                        <td>126</td>
                        <td>130</td>
                        <td>126</td>
                        <td>130</td>
                    </tr>
                    <tr>
                        <td class="title">Бедра (см.)</td>
                        <td>82</td>
                        <td>86</td>
                        <td>92</td>
                        <td>96</td>
                        <td>100</td>
                        <td>104</td>
                        <td>108</td>
                        <td>112</td>
                        <td>116</td>
                        <td>120</td>
                        <td>124</td>
                        <td>128</td>
                        <td>132</td>
                        <td>136</td>
                        <td>140</td>
                        <td>144</td>
                        <td>148</td>
                        <td>152</td>
                        <td>156</td>
                        <td>152</td>
                        <td>156</td>
                    </tr>
                </table>
            </div>
            <div class="wrapper-size-kinds">
                <div class="title-size-page">Детская одежда</div>
                <div class="title-category">Определение размеров детской одежды</div>
                <table class="kinds-one">
                    <tr class="one-line">
                        <td>Возраст (г.)</td>
                        <td>Рост (см.)</td>
                        <td>Высота от пола до талии (см.)</td>
                        <td>Обхват талии (см.)</td>
                        <td>Обхват груди (см.)</td>
                        <td>Размер</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>92 – 98</td>
                        <td>55 – 58</td>
                        <td>51 – 53</td>
                        <td>54 – 55</td>
                        <td>28</td>                     
                    </tr>
                    <tr class="white-line">
                        <td>3</td>
                        <td>98 – 104</td>
                        <td>57 – 60</td>
                        <td>52 – 54</td>
                        <td>56 – 57</td>
                        <td>20 – 30</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>111 – 116</td>
                        <td>61 – 64</td>
                        <td>54 – 56</td>
                        <td>60 – 61</td>
                        <td>32</td>                     
                    </tr>
                    <tr class="white-line">
                        <td>5</td>
                        <td>117 – 122</td>
                        <td>63 – 67</td>
                        <td>55 – 58</td>
                        <td>62 – 63</td>
                        <td>34</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>117 – 122</td>
                        <td>63 – 67</td>
                        <td>55 – 58</td>
                        <td>62 – 63</td>
                        <td>32</td>                     
                    </tr>
                    <tr class="white-line">
                        <td>7</td>
                        <td>123 – 128</td>
                        <td>66 – 70</td>
                        <td>57 – 59</td>
                        <td>64 – 65</td>
                        <td>34</td>                     
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>129 – 134</td>
                        <td>69 – 73</td>
                        <td>58 – 61</td>
                        <td>66 – 67</td>
                        <td>34 – 36</td>                     
                    </tr>
                    <tr class="white-line">
                        <td>10</td>
                        <td>135 – 140</td>
                        <td>72 – 76</td>
                        <td>60 – 62</td>
                        <td>68 – 70</td>
                        <td>36</td>                     
                    </tr>
                    <tr>
                        <td>12</td>
                        <td>141 – 146</td>
                        <td>75 – 80</td>
                        <td>61 – 64</td>
                        <td>71 – 73</td>
                        <td>38</td>                     
                    </tr>
                    <tr class="white-line">
                        <td>14</td>
                        <td>147 – 152</td>
                        <td>79 – 84</td>
                        <td>63 – 66</td>
                        <td>74 – 77</td>
                        <td>39</td>                     
                    </tr>
                </table>
                <table class="kinds-two">
                    <tr class="one-line">
                        <td class="one">Возраст</td>
                        <td class="one">Рост (см.)</td>
                        <td>Двойные значения</td>
                        <td>Российский размер</td>
                        <td>Объём груди (см.)</td>
                        <td>Объём талии (см.)</td>
                        <td>Объём бедер</td>                       
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>92</td>
                        <td>86 – 92</td>
                        <td>26</td>
                        <td>52 – 54</td>
                        <td>50 – 52</td>
                        <td>56 – 58</td>                       
                    </tr>
                    <tr class="white-line">
                        <td>3</td>
                        <td>98</td>
                        <td>98 – 104</td>
                        <td>28</td>
                        <td>54 – 56</td>
                        <td>52</td>
                        <td>58 – 60</td>                       
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>104</td>
                        <td>104 – 110</td>
                        <td>28 – 30</td>
                        <td>54 – 56</td>
                        <td>52 – 54</td>
                        <td>60 – 62</td>                       
                    </tr>
                    <tr class="white-line">
                        <td>5</td>
                        <td>110</td>
                        <td>110 – 116</td>
                        <td>30</td>
                        <td>56 – 58</td>
                        <td>54</td>
                        <td>62 – 64</td>                       
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>116</td>
                        <td>116 – 122</td>
                        <td>30 – 32</td>
                        <td>58 – 60</td>
                        <td>54 – 56</td>
                        <td>64 – 66</td>                       
                    </tr>
                    <tr class="white-line">
                        <td>7</td>
                        <td>120</td>
                        <td>122 – 128</td>
                        <td>32</td>
                        <td>60 – 62</td>
                        <td>56 – 58</td>
                        <td>66 – 68</td>                       
                    </tr>
                </table>
                <div class="title-category">Детские размеры</div>
                <table class="kinds-tree">
                    <tr class="one-line">
                        <td class="title">Рост / Размер</td>
                        <td>56</td>
                        <td>62</td>
                        <td>68</td>
                        <td>74</td>
                        <td>80</td>
                        <td>86</td>
                        <td>98</td>
                        <td>104</td>
                        <td>110</td>
                        <td>116</td>
                        <td>122</td>
                        <td>128</td>
                        <td>134</td>
                        <td>140</td>
                        <td>146</td>
                        <td>152</td>
                        <td>158</td>
                        <td>164</td>
                        <td>170</td>
                    </tr>
                    <tr>
                        <td class="title">Обхват груди</td>
                        <td>44</td>
                        <td>46</td>
                        <td>48</td>
                        <td>50</td>
                        <td>52</td>
                        <td>53</td>
                        <td>55</td>
                        <td>56</td>
                        <td>57</td>
                        <td>58</td>
                        <td>61</td>
                        <td>64</td>
                        <td>67</td>
                        <td>70</td>
                        <td>73</td>
                        <td>76</td>
                        <td>79</td>
                        <td>82</td>
                        <td>85</td>
                    </tr>
                    <tr>
                        <td class="title">Обхват талии</td>
                        <td>43</td>
                        <td>44,5</td>
                        <td>46</td>
                        <td>47,5</td>
                        <td>49</td>
                        <td>50</td>
                        <td>52</td>
                        <td>53</td>
                        <td>54</td>
                        <td>55</td>
                        <td>56,5</td>
                        <td>58</td>
                        <td>59,5</td>
                        <td>61</td>
                        <td>63</td>
                        <td>65</td>
                        <td>67</td>
                        <td>69</td>
                        <td>71</td>
                    </tr>
                    <tr>
                        <td class="title">Обхват бёдер</td>
                        <td>43</td>
                        <td>45</td>
                        <td>47</td>
                        <td>49</td>
                        <td>51</td>
                        <td>53</td>
                        <td>57</td>
                        <td>59</td>
                        <td>61</td>
                        <td>63</td>
                        <td>66</td>
                        <td>69</td>
                        <td>72</td>
                        <td>75</td>
                        <td>79</td>
                        <td>81</td>
                        <td>84</td>
                        <td>87</td>
                        <td>90</td>
                    </tr>
                    
                </table>
                <div class="title-category">Детские шапки</div>
                <table class="kinds-four">
                    <tr class="one-line">
                        <td class="title">Размер</td>
                        <td>XS</td>
                        <td>S</td>
                        <td>M</td>
                        <td>L</td>
                    </tr>
                    <tr class="white-line">
                        <td class="title">Обхват головы (см)</td>
                        <td>50</td>
                        <td>50 – 52</td>
                        <td>52</td>
                        <td>54</td>
                    </tr>
                </table>
                <div class="title-category">Детские шарфы, перчатки</div>
                <table class="kinds-four">
                    <tr class="one-line">
                        <td class="title">Размер</td>
                        <td>XS</td>
                        <td>S</td>
                        <td>M</td>
                        <td>L</td>
                    </tr>
                    <tr class="white-line">
                        <td class="title">Возраст</td>
                        <td>2 – 4</td>
                        <td>4 – 8</td>
                        <td>8 – 10</td>
                        <td>10 – 12</td>
                    </tr>
                </table>
                <div class="title-category">Детские носки и гольфы</div>
                <table class="kinds-five">
                    <tr class="one-line">
                        <td class="title">Размер</td>
                        <td>18 – 20</td>
                        <td>21 – 23</td>
                        <td>24 – 26</td>
                        <td>27 – 29</td>
                        <td>30 – 32</td>
                        <td>33 – 35</td>
                    </tr>
                    <tr>
                        <td class="title">Длина стопы (см)</td>
                        <td>12</td>
                        <td>14</td>
                        <td>16</td>
                        <td>18</td>
                        <td>20</td>
                        <td>22</td>
                    </tr>
                    <tr class="white-line">
                        <td class="title">Возраст</td>
                        <td>до 1 года</td>
                        <td>1 – 2 года</td>
                        <td>3 – 4 года</td>
                        <td>5 – 7 лет</td>
                        <td>7 – 9 лет</td>
                        <td>10 – 11 лет</td>
                    </tr>
                </table>
                <div class="title-category">Детская обувь</div>
                <table class="kinds-six">
                    <tr class="one-line">
                        <td class="title">Размер</td>
                        <td>24</td>
                        <td>25</td>
                        <td>26</td>
                        <td>27</td>
                        <td>28</td>
                        <td>29</td>
                        <td>30</td>
                        <td>31</td>
                        <td>32</td>
                        <td>33</td>
                        <td>34</td>
                        <td>35</td>
                        <td>36</td>
                        <td>37</td>
                        <td>38</td>
                        <td>39</td>
                    </tr>
                    <tr class="white-line">
                        <td class="title">Длина стопы (см)</td>
                        <td>15</td>
                        <td>16</td>
                        <td>16,5</td>
                        <td>17</td>
                        <td>17,5</td>
                        <td>18</td>
                        <td>19</td>
                        <td>20</td>
                        <td>20,5</td>
                        <td>21</td>
                        <td>22</td>
                        <td>22,5</td>
                        <td>23</td>
                        <td>24</td>
                        <td>25</td>
                        <td>25,5</td>
                    </tr>
                </table>
            </div>
            <div class="wrapper-size-women">
                <div class="title-size-page">Женское бельё и купальники</div>
                <div class="title-category">Таблица соответствия размеров купальников</div>
                <table class="woman-one">
                    <tr class="one-line">
                        <td class="title">Размер трусов</td>
                        <td>XS</td>
                        <td>S</td>
                        <td>M</td>
                        <td>L</td>
                        <td>XL</td>
                        <td>XXL</td>
                    </tr>
                    <tr>
                        <td class="title">Размер бюстгальтера</td>
                        <td>65B</td>
                        <td>65D</td>
                        <td>75B*</td>
                        <td>80B</td>
                        <td>80E</td>
                        <td>85C</td>
                    </tr>
                    <tr class="white-line">
                        <td class="title">Размер бюстгальтера</td>
                        <td>65C</td>
                        <td>70C</td>
                        <td>75C</td>
                        <td>80C</td>
                        <td>85B</td>
                        <td>85D</td>
                    </tr>
                    <tr>
                        <td class="title">Размер бюстгальтера</td>
                        <td>70A</td>
                        <td>70D</td>
                        <td>75D</td>
                        <td>80D</td>
                        <td>–</td>
                        <td>85E</td>
                    </tr>
                    <tr class="white-line">
                        <td class="title">Размер бюстгальтера</td>
                        <td>70B</td>
                        <td>75A</td>
                        <td>75E</td>
                        <td>–</td>
                        <td>–</td>
                        <td>–</td>
                    </tr>
                </table>
                <div class="text">*Модели купальников с PUSH-UP BRA размером 75B комплектуются трусами размера S</div>
                <div class="title-category">Трусы</div>
                <table class="woman-two">
                    <tr class="one-line">
                        <td class="title">Обхват бёдер</td>
                        <td>88 – 92</td>
                        <td>92 – 96</td>
                        <td>96 – 100</td>
                        <td>100 – 104</td>
                        <td>104 – 108</td>
                        <td>108 – 112</td>
                        <td>112 – 116</td>
                        <td>116 – 120</td>
                        <td>120 – 124</td>
                        <td>124 – 128</td>
                        <td>128 – 132</td>
                    </tr>
                    <tr>
                        <td class="title">Россия?</td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                        <td>–</td>
                        <td>–</td>
                    </tr>
                    <tr class="white-line">
                        <td class="title">Россия?</td>
                        <td>42</td>
                        <td>44</td>
                        <td>46</td>
                        <td>48</td>
                        <td>50</td>
                        <td>52</td>
                        <td>54</td>
                        <td>56</td>
                        <td>58</td>
                        <td>60</td>
                        <td>62</td>
                    </tr>
                </table>
                <div class="title-category">Обхват груди</div>
                <table class="woman-tree">
                    <tr class="one-line">
                        <td class="title">Размер чашки</td>
                        <td>65</td>
                        <td>70</td>
                        <td>75</td>
                        <td>80</td>
                        <td>85</td>
                        <td>90</td>
                        <td>95</td>
                    </tr>
                    <tr>
                        <td class="title">AA</td>
                        <td>75 – 77</td>
                        <td>80 – 82</td>
                        <td>85 – 87</td>
                        <td>90 – 92</td>
                        <td>95 – 97</td>
                        <td>100 – 102</td>
                        <td>–</td>
                    </tr>
                    <tr class="white-line">
                        <td class="title">A</td>
                        <td>77 – 79</td>
                        <td>82 – 84</td>
                        <td>87 – 89</td>
                        <td>92 – 94</td>
                        <td>97 – 99</td>
                        <td>102 – 104</td>
                        <td>107 – 109</td>
                    </tr>
                    <tr>
                        <td class="title">B</td>
                        <td>79 – 81</td>
                        <td>84 – 86</td>
                        <td>89 – 91</td>
                        <td>94 – 96</td>
                        <td>99 – 101</td>
                        <td>104 – 106</td>
                        <td>109 – 111</td>
                    </tr>
                    <tr class="white-line">
                        <td class="title">C</td>
                        <td>81 – 83</td>
                        <td>86 – 88</td>
                        <td>91 – 93</td>
                        <td>96 – 98</td>
                        <td>101 – 103</td>
                        <td>106 – 108</td>
                        <td>111 – 113</td>
                    </tr>
                    <tr>
                        <td class="title">D</td>
                        <td>83 – 85</td>
                        <td>88 – 90</td>
                        <td>93 – 95</td>
                        <td>98 – 100</td>
                        <td>103 – 105</td>
                        <td>108 – 110</td>
                        <td>113 – 115</td>
                    </tr>
                    <tr class="white-line">
                        <td class="title">E</td>
                        <td>85 – 87</td>
                        <td>90 – 92</td>
                        <td>95 – 97</td>
                        <td>100 – 102</td>
                        <td>105 – 107</td>
                        <td>110 – 112</td>
                        <td>115 – 117</td>
                    </tr>
                    <tr>
                        <td class="title">F</td>
                        <td>87 – 89</td>
                        <td>92 – 94</td>
                        <td>97 – 99</td>
                        <td>102 – 104</td>
                        <td>107 – 109</td>
                        <td>112 – 114</td>
                        <td>117 – 119</td>
                    </tr>
                </table>
                <div class="title-category">Обхват под грудью</div>
                <table class="woman-four">
                    <tr class="white-line">
                        <td class="title">Россия</td>
                        <td>63 – 67</td>
                        <td>68 – 72</td>
                        <td>73 – 77</td>
                        <td>78 – 82</td>
                        <td>83 – 87</td>
                        <td>88 – 92</td>
                        <td>93 – 97</td>
                    </tr>
                    <tr class="line"></tr>
                    <tr class="white-line">
                        <td class="title">Италия</td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                    </tr>
                </table>
                <div class="title-category">Соответствие размеров</div>
                <table class="woman-five">
                    <tr class="white-line">
                        <td class="title">Россия</td>
                        <td>40</td>
                        <td>42</td>
                        <td>44</td>
                        <td>46</td>
                        <td>48</td>
                        <td>50</td>
                        <td>52</td>
                        <td>54</td>
                        <td>56</td>
                        <td>58</td>
                    </tr>
                    <tr class="line"></tr>
                    <tr class="white-line">
                        <td class="title">Международный</td>
                        <td>XS</td>
                        <td>S</td>
                        <td>M</td>
                        <td>L</td>
                        <td>XL</td>
                        <td>XXL</td>
                        <td>3XL</td>
                        <td>4XL</td>
                        <td>5XL</td>
                        <td>6XL</td>
                    </tr>
                    <tr class="line"></tr>
                    <tr class="white-line">
                        <td class="title">Италия</td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                        <td>10</td>
                    </tr>
                </table>
            </div>
            <div class="wrapper-jeans">
                <div class="title-size-page">Джинсы</div>
                <table>
                    <tr class="one-line">
                        <td class="title">Размер</td>
                        <td>24</td>
                        <td>25</td>
                        <td>26</td>
                        <td>27</td>
                        <td>28</td>
                        <td>29</td>
                        <td>30</td>
                        <td>31</td>
                        <td>32</td>
                    </tr>
                    <tr>
                        <td class="title">Россия</td>
                        <td>38</td>
                        <td>40</td>
                        <td>42</td>
                        <td>42/44</td>
                        <td>44</td>
                        <td>44/46</td>
                        <td>46</td>
                        <td>46/48</td>
                        <td>48</td>
                    </tr>
                    <tr class="white-line">
                        <td class="title">Обхват талии (см)</td>
                        <td>58 – 60</td>
                        <td>60 – 63</td>
                        <td>62 – 66</td>
                        <td>62 – 70</td>
                        <td>66 – 70</td>
                        <td>66 – 74</td>
                        <td>70 – 74</td>
                        <td>70 – 78</td>
                        <td>74 – 78</td>
                    </tr>
                    <tr>
                        <td class="title">Обхват бёдер (см)</td>
                        <td>86 – 90</td>
                        <td>88 – 92</td>
                        <td>90 – 94</td>
                        <td>90 – 98</td>
                        <td>94 – 98</td>
                        <td>94 – 102</td>
                        <td>98 – 102</td>
                        <td>98 – 104</td>
                        <td>102 – 104</td>
                    </tr>
                </table>
                <table class="jeans-size">
                    <tr class="one-line">
                        <td class="title">Размер</td>
                        <td>33</td>
                        <td>34</td>
                        <td>35</td>
                        <td>36</td>
                        <td>38</td>
                        <td>40</td>
                        <td>42</td>
                        <td>44</td>
                        <td>–</td>
                    </tr>
                    <tr>
                        <td class="title">Россия</td>
                        <td>48</td>
                        <td>48/50</td>
                        <td>50</td>
                        <td>50/52</td>
                        <td>52</td>
                        <td>54</td>
                        <td>56</td>
                        <td>58</td>
                        <td>–</td>
                    </tr>
                    <tr class="white-line">
                        <td class="title">Обхват талии (см)</td>
                        <td>74 – 82</td>
                        <td>78 – 82</td>
                        <td>78 – 84</td>
                        <td>80 – 84</td>
                        <td>80 – 86</td>
                        <td>82 – 86</td>
                        <td>82 – 88</td>
                        <td>84 – 88</td>
                        <td>–</td>
                    </tr>
                    <tr>
                        <td class="title">Обхват бёдер (см)</td>
                        <td>102 – 108</td>
                        <td>104 – 108</td>
                        <td>104 – 110</td>
                        <td>106 – 110</td>
                        <td>106 – 112</td>
                        <td>108 – 112</td>
                        <td>108 – 114</td>
                        <td>110 – 114</td>
                        <td>–</td>
                    </tr>
                </table>
            </div>
            <div class="wrapper-jeans-two">
                <div class="title-size-page">Джинсы FEIMAILIS</div>
                <table>
                    <tr class="one-line">
                        <td class="title">Размер на эткетке</td>
                        <td>25</td>
                        <td>29</td>
                        <td>30</td>
                        <td>31</td>
                        <td>32</td>
                        <td>33</td>
                        <td>34</td>
                        <td>35</td>
                        <td>36</td>
                        <td>38</td>
                        <td>40</td>
                        <td>42</td>
                        <td>44</td>
                    </tr>
                    <tr>
                        <td class="title">Россия</td>
                        <td>42</td>
                        <td>44</td>
                        <td>46</td>
                        <td>48</td>
                        <td>50</td>
                        <td>52</td>
                        <td>54</td>
                        <td>56</td>
                        <td>58</td>
                        <td>60</td>
                        <td>62</td>
                        <td>64</td>
                        <td>66</td>
                    </tr>
                    <tr class="white-line">
                        <td class="title">Европа</td>
                        <td>26</td>
                        <td>28</td>
                        <td>29</td>
                        <td>30</td>
                        <td>31</td>
                        <td>32</td>
                        <td>33</td>
                        <td>34</td>
                        <td>36</td>
                        <td>38</td>
                        <td>40</td>
                        <td>42</td>
                        <td>44</td>
                    </tr>
                    <tr>
                        <td class="title">Обхват бёдер (см)</td>
                        <td>90 – 94</td>
                        <td>94 – 98</td>
                        <td>98 – 102</td>
                        <td>102 – 106</td>
                        <td>106 – 110</td>
                        <td>110 – 114</td>
                        <td>114 – 118</td>
                        <td>118 – 122</td>
                        <td>122 – 126</td>
                        <td>126 – 130</td>
                        <td>130 – 134</td>
                        <td>134 – 138</td>
                        <td>138 – 142</td>
                    </tr>
                </table>
            </div>
            <div class="wrapper-man">
                <div class="title-size-page">Мужское бельё</div>
                <table>
                    <tr class="one-line">
                        <td class="title">Международный размер</td>
                        <td>XS</td>
                        <td>S</td>
                        <td>M</td>
                        <td>L</td>
                        <td>XL</td>
                        <td>XXL</td>
                        <td>3XL</td>
                        <td>4XL</td>
                        <td>5XL</td>
                    </tr>
                    <tr>
                        <td class="title">Россия</td>
                        <td>44</td>
                        <td>46</td>
                        <td>48</td>
                        <td>50</td>
                        <td>52</td>
                        <td>54</td>
                        <td>56</td>
                        <td>58</td>
                        <td>60</td>
                    </tr>
                    <tr class="white-line">
                        <td class="title">Италия</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td class="title">Обхват талии (см)</td>
                        <td>76 – 80</td>
                        <td>80 – 84</td>
                        <td>84 – 88</td>
                        <td>88 – 92</td>
                        <td>92 – 96</td>
                        <td>96 – 100</td>
                        <td>100 – 104</td>
                        <td>104 – 108</td>
                        <td>108 – 112</td>
                    </tr>
                    <tr class="white-line">
                        <td class="title">Обхват бёдер (см)</td>
                        <td>91 – 94</td>
                        <td>95 – 98</td>
                        <td>99 – 102</td>
                        <td>103 – 106</td>
                        <td>107 – 110</td>
                        <td>111 – 114</td>
                        <td>115 – 118</td>
                        <td>119 – 122</td>
                        <td>123 – 126</td>
                    </tr>
                </table>
            </div>
            <div class="wrapper-man-two">
                <div class="title-size-page">Мужское бельё GRIFF BASIC UOMO</div>
                <table>
                    <tr class="one-line">
                        <td class="title">Международный размер</td>
                        <td>S</td>
                        <td>M</td>
                        <td>L</td>
                        <td>XL</td>
                        <td>2XL</td>
                        <td>3XL</td>                  
                    </tr>
                    <tr>
                        <td class="title">Россия</td>
                        <td>44</td>
                        <td>46</td>
                        <td>48</td>
                        <td>50</td>
                        <td>52</td>
                        <td>5</td>                  
                    </tr>
                    <tr class="white-line">
                        <td class="title">Италия</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>             
                    </tr>
                    <tr>
                        <td class="title">Обхват талии (см)</td> 
                        <td>76 – 80</td>
                        <td>80 – 84</td>
                        <td>84 – 88</td>
                        <td>88 – 92</td>
                        <td>92 – 96</td>
                        <td>96 – 100</td>
                                         
                    </tr>
                    <tr class="white-line">
                        <td class="title">Обхват бёдер (см)</td>
                        <td>91 – 94</td>
                        <td>95 – 98</td>
                        <td>99 – 102</td>
                        <td>103 – 106</td>
                        <td>107 – 110</td>
                        <td>111 – 114</td>                  
                    </tr>
                </table>
            </div>
        </div>
    `
}

let link = [
    {
        title: 'Размеры',
        link: '/#information/size'
    }
]

