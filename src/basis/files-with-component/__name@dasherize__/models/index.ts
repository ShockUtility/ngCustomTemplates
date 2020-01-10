export interface <%= classify(name) %> {
  id: string;
  volumnInfo: {
    rowid: string;

    //-----------------------------
    hotelChainCode: string;          ◀︎◀︎◀︎ JSON 스키마 보고 디스플레이 필드 위주로 작성 (호텔체인브랜드 샘플코드임)
    chainBrandCode: string;
    chainBrandNameEn: string;
    chainBrandNameKo: string;
    homepageUrl: string;
    //-----------------------------

    firstInsertUno: number;
    firstInsertDatetime: string;
    firstInsertName: string;
    lastUdateUno: number;
    lastUpdateDatetime: string;
    lastUpdateName: string;
  };
}

export interface <%= classify(name) %>Search {
  searchType: 'hotelBrandCodeTerm' | 'hotelBrandNameTerm';  ◀︎◀︎◀︎ 검색 조건에 맞게 설정 (호텔체인브랜드 샘플코드임)
  searchTerm: string;
}
