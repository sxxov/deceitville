import circle_bin from './circle.bin?url';
import landscape_jpg from './landscape.jpg?url';

export default {
	"asset": {
		"generator": "Khronos glTF Blender I/O v3.6.27",
		"version": "2.0"
	},
	"extensionsUsed": [
		"KHR_draco_mesh_compression",
		"KHR_materials_specular",
		"KHR_materials_ior"
	],
	"extensionsRequired": [
		"KHR_draco_mesh_compression"
	],
	"scene": 0,
	"scenes": [
		{
			"name": "Scene",
			"nodes": [
				0
			]
		}
	],
	"nodes": [
		{
			"mesh": 0,
			"name": "Circle",
			"scale": [
				0.5894461274147034,
				0.5894461274147034,
				0.5894461274147034
			],
			"translation": [
				-0.2706491947174072,
				4.608029365539551,
				1.6466724872589111
			]
		}
	],
	"materials": [
		{
			"doubleSided": true,
			"extensions": {
				"KHR_materials_specular": {
					"specularColorFactor": [
						0,
						0,
						0
					]
				},
				"KHR_materials_ior": {
					"ior": 1.4500000476837158
				}
			},
			"name": "landscape_mat",
			"pbrMetallicRoughness": {
				"baseColorTexture": {
					"index": 0
				},
				"metallicFactor": 0
			}
		}
	],
	"meshes": [
		{
			"name": "Circle",
			"primitives": [
				{
					"attributes": {
						"COLOR_0": 0,
						"POSITION": 1,
						"NORMAL": 2,
						"TEXCOORD_0": 3
					},
					"extensions": {
						"KHR_draco_mesh_compression": {
							"bufferView": 0,
							"attributes": {
								"COLOR_0": 0,
								"POSITION": 1,
								"NORMAL": 2,
								"TEXCOORD_0": 3
							}
						}
					},
					"indices": 4,
					"material": 0,
					"mode": 4
				}
			]
		}
	],
	"textures": [
		{
			"sampler": 0,
			"source": 0
		}
	],
	"images": [
		{
			"mimeType": "image/jpeg",
			"name": "landscape",
			"uri": landscape_jpg
		}
	],
	"accessors": [
		{
			"componentType": 5123,
			"count": 9409,
			"normalized": true,
			"type": "VEC4"
		},
		{
			"componentType": 5126,
			"count": 9409,
			"max": [
				136.73362731933594,
				26.39401626586914,
				140.76673889160156
			],
			"min": [
				-138.3880615234375,
				-7.050587177276611,
				-138.5811004638672
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 9409,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 9409,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 55296,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 47043,
			"byteOffset": 0
		}
	],
	"samplers": [
		{
			"magFilter": 9729,
			"minFilter": 9987
		}
	],
	"buffers": [
		{
			"byteLength": 47044,
			"uri": circle_bin
		}
	]
}