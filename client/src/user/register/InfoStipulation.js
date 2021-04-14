import React from 'react'
import '../../styles/stipulation.scss'
import TopBar from '../../utils/TopBar'


function InfoStipulation() {
    return (
        <>
        <TopBar
        left="null" 
        center={{title:"개인정보 이용 동의", data:null}} 
        right="null" 
        lfunc={null}
        rfunc={null}
        size="small"/>
            <div>
                    <h3>제1조(목적)</h3>
                    <p className = "a">이 약관은 회사가 온라인으로 제공하는 디지털콘텐츠(이하 "콘텐츠"라고 한다) 및 제반서비스의 이용과 관련하여 회사와 이용자와의 권리, 
                        의무 및 책임사항 등을 규정함을 목적으로 합니다.</p>
                <h3>제2조(정의)</h3>
                <ul>
                     <li>"회사"라 함은 "콘텐츠" 산업과 관련된 경제활동을 영위하는 자로서 콘텐츠 및 제반서비스를 제공하는 자를 말합니다.</li>
                     <li>"이용자"라 함은 "회사"의 사이트에 접속하여 이 약관에 따라 "회사"가 제공하는 "콘텐츠" 및 제반서비스를 이용하는 회원 및 비회원을 말합니다.</li>
                     <li>"회원"이라 함은 "회사"와 이용계약을 체결하고 "이용자" 아이디(ID)를 부여받은 "이용자"로서 "회사"의 정보를 지속적으로 제공받으며 
                         "회사"가 제공하는 서비스를 지속적으로 이용할 수 있는 자를 말합니다.</li>
                     <li>"비회원"이라 함은 "회원"이 아니면서 "회사"가 제공하는 서비스를 이용하는 자를 말합니다.</li>
                     <li>"콘텐츠"라 함은 정보통신망이용촉진 및 정보보호 등에 관한 법률 제2조 제1항 제1호의 규정에 의한 정보통신망에서 사용되는 
                         부호·문자·음성·음향·이미지 또는 영상 등으로 표현된 자료 또는 정보로서, 그 보존 및 이용에 있어서 효용을 높일 수 있도록 
                         전자적 형태로 제작 또는 처리된 것을 말합니다.</li>
                     <li>"아이디(ID)"라 함은 "회원"의 식별과 서비스이용을 위하여 "회원"이 정하고 "회사"가 승인하는 문자 또는 숫자의 조합을 말합니다.</li>
                     <li>"비밀번호(PASSWORD)"라 함은 "회원"이 부여받은 "아이디"와 일치되는 "회원"임을 확인하고 비밀보호를 위해 "회원" 자신이 정한 문자 또는 숫자의 조합을 말합니다.</li>
                </ul>
                <h3>제3조(신원정보 등의 제공)</h3> 
                    <p className = "a">"회사"는 이 약관의 내용, 상호, 대표자 성명, 영업소 소재지 주소(소비자의 불만을 처리할 수 있는 곳의 주소를 포함),
                    전화번호, 모사전송번호, 전자우편주소, 사업자등록번호, 통신판매업 신고번호 및 개인정보관리책임자 등을 이용자가 쉽게 알 수 있도록 온라인 서비스초기화면에 게시합니다.
                    다만, 약관은 이용자가 연결화면을 통하여 볼 수 있도록 할 수 있습니다.</p>
                    <h3>제4조(약관의 게시 등)</h3>
                    <ul> 
                    <li>"회사"는 이 약관을 "회원"이 그 전부를 인쇄할 수 있고 거래과정에서 해당 약관의 내용을 확인할 수 있도록 기술적 조치를 취합니다.</li>
                    <li>"회사"는 "이용자"가 "회사"와 이 약관의 내용에 관하여 질의 및 응답할 수 있도록 기술적 장치를 설치합니다.</li>
                    <li>"회사"는 "이용자"가 약관에 동의하기에 앞서 약관에 정하여져 있는 내용 중 청약철회, 환불조건 등과 같은 중요한 내용을 
                        이용자가 쉽게 이해할 수 있도록 별도의 연결화면 또는 팝업화면 등을 제공하여 "이용자"의 확인을 구합니다.</li>
                    </ul>
                    <h3>제5조(약관의 개정 등)</h3> 
                    <ul>
                    <li> "회사"는 온라인 디지털콘텐츠산업 발전법, 전자상거래 등에서의 소비자보호에 관한 법률, 약관의 규제에 관한 법률 등 
                        관련법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.</li>
                    <li> "회사"가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 서비스초기화면에 
                        그 적용일자 7일 이전부터 적용일 후 상당한 기간동안 공지하고, 기존회원에게는 개정약관을 전자우편주소로 발송합니다.</li>
                    <li> "회사"가 약관을 개정할 경우에는 개정약관 공지 후 개정약관의 적용에 대한 "이용자"의 동의 여부를 확인합니다. 
                        "이용자"가 개정약관의 적용에 동의하지 않는 경우 "회사" 또는 "이용자"는 콘텐츠 이용계약을 해지할 수 있습니다. 
                        이때, "회사"는 계약해지로 인하여 "이용자"가 입은 손해를 배상합니다.</li>
                    </ul>
                    <h3>제6조(약관의 해석)</h3> 
                    <p className = "a">이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 
                    온라인 디지털콘텐츠산업 발전법, 전자상거래 등에서의 소비자보호에 관한 법률, 약관의 규제에 관한 법률, 
                    문화체육관광부장관이 정하는 디지털콘텐츠이용자보호지침, 기타 관계법령 또는 상관례에 따릅니다.</p>
            </div>
        </>
    )
}

export default InfoStipulation
