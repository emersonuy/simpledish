const AlignHelper = {
    align_middle: (ref_object, object_to_align) => {
        let ref_pos = ref_object.getPosition();
        let ref_size = ref_object.getSize();
        let align_obj_size = object_to_align.getSize();

        let align_pos = { x: 0, y: 0 };
        let align_size = { w: 0, y: 0 };

        align_pos.x = ref_pos.x + ref_size.w / 2 - align_obj_size.w / 2;
        align_pos.y = ref_pos.y + ref_size.h / 2 - align_obj_size.h / 2;

        object_to_align.setPosition(align_pos.x, align_pos.y);
    },
};

export default AlignHelper;
