if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "C:/Users/Admin/.gradle/caches/8.13/transforms/8349492370c667295f174cbdf2ca797a/transformed/hermes-android-0.79.1-debug/prefab/modules/libhermes/libs/android.arm64-v8a/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "C:/Users/Admin/.gradle/caches/8.13/transforms/8349492370c667295f174cbdf2ca797a/transformed/hermes-android-0.79.1-debug/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

